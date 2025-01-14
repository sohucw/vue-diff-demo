import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {},
    emits: ['on-click'],
    setup() {
        let arr = [1, 2, 3, 4, 5];
        const name = ref('大伟聊前端');
        return () => (
            <>
                <h2>{name.value}</h2>
                {arr.map((v) => {
                    return <div class="test">{v}</div>;
                })}
            </>
        );
    },
});
