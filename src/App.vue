<template>
  <div>
      <div v-reszie="aaa" id="box" >
        <div style="width: 400px; height: 500px;">
          test
        </div>
      </div>
  </div>
</template>

<script setup lang='ts'>
import type { Directive } from 'vue';
// import useResize from 'constom-hooks';

const aaa=(e: any) => {
  console.log(e)
}

// onMounted(() => {
//   useResize(document.querySelector('#box'), (e: any) => {
//     console.log(e)
//   })
// }
// )
// glob 是懒加载的方式
// let modules = {
//  'xxxx': ()=> import('xxx')
// }
// eager 静态加载
//  import xx from 'xxx'
let imgeList: Record<string, {default: string}> = import.meta.glob('./assets/images/*.*', {eager: true});
let arr = Object.values(imgeList).map(v=> v.default);
let vLazy: Directive<HTMLImageElement, string> = async (el, binding) => {
  let url = await import('./assets/vue.svg')
  el.src = url.default;
  let observer = new IntersectionObserver((entries) => {
      console.log(entries[0], el)
      if(entries[0].intersectionRatio>0 && entries[0].isIntersecting)  {
        setTimeout(()=> {
          el.src = binding.value
        }, 2000);
        observer.unobserve(el);
      }
  })
  observer.observe(el)
}
</script>

<style scoped lang='less'>
#box {
  border: 1px solid #ccc;
  resize: both;
  overflow: hidden;
}
</style>