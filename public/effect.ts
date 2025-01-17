let activeEffect;
interface Options {
    scheduler?: Function;
}
export const effect = (fn: Function, options: Options) => {
    const _effect = function () {
        activeEffect = _effect;
        let res = fn();
        return res;
    };
    _effect();
    _effect.optons = options;
    return _effect;
};

const targetMap = new WeakMap();
export const track = (target, key) => {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if (!deps) {
        deps = new Set();
        depsMap.set(key, deps);
    }
    deps.add(activeEffect);
};

export const trigger = (target, key) => {
    const depsMap = targetMap.get(target);
    const deps = depsMap.get(key);
    deps.forEach((effect) => {
        if (effect.optons?.scheduler) {
            effect.optons.scheduler();
        } else {
            effect();
        }
    });
};
