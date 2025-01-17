import { track, trigger } from './effect';

const isObj = (target) => {
    return target != null && typeof target === 'object';
};
export const reactive = <T extends object>(target: T) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver) as object;
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
