import { track, trigger } from './effect.js';
const isObj = (target) => {
    return target != null && typeof target === 'object';
};
export const reactive = (target) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver);
            track(target, key);
            if (isObj(res)) {
                return reactive(res);
            }
            return res;
        },
        set(target, key, receiver) {
            let res = Reflect.set(target, key, receiver);
            trigger(target, key);
            return res;
        },
    });
};
