<template>
  <div>
      <div >
          <img  v-for ="item in arr " height="500"  width="360" alt="" v-lazy="item">
      </div>
  </div>
</template>

<script setup lang='ts'>
import type { Directive } from 'vue';

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

<style scoped lang='less'></style>