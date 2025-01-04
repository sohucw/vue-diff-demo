import { effect } from './effect.js';
export const computed = (getter) => {
    let catchValue;
    let _dirty = true;
    let _value = effect(getter, {
        scheduler: () => {
            _dirty = true;
        },
    });
    class ComputedRefImpl {
        get value() {
            if (_dirty) {
                catchValue = _value();
                _dirty = false;
            }
            return catchValue;
        }
    }
    return new ComputedRefImpl();
};
