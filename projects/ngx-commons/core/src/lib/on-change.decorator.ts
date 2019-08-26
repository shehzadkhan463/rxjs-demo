export interface SimpleChange<T> {
    firstChange: boolean;
    previousValue: T;
    currentValue: T;
    isFirstChange: () => boolean;
}

export type CallbackFunction<T> = (value: T, change?: SimpleChange<T>) => void;

export function OnChange<T = any>(fn: CallbackFunction<T> | string) {
    const cachedValue = Symbol();
    const isFirstChange = Symbol();

    return (target: any, key: PropertyKey) => {
        const callBackFn: CallbackFunction<T> = typeof fn === 'string' ? target[fn] : fn;
        if (!callBackFn) {
            throw new Error(`Cannot find method ${fn} in class ${target.constructor.name}`);
        }
        Object.defineProperty(target, key, {
            set: function (value) {
                // change status of "isFirstChange"
                this[isFirstChange] = this[isFirstChange] === undefined;
                if (!this[isFirstChange] && this[cachedValue] === value) {
                    return;
                }
                const oldValue = this[cachedValue];
                this[cachedValue] = value;
                const simpleChange: SimpleChange<T> = {
                    firstChange: this[isFirstChange],
                    previousValue: oldValue,
                    currentValue: this[cachedValue],
                    isFirstChange: () => this[isFirstChange],
                }
                callBackFn.call(this, this[cachedValue], simpleChange);
            },
            get: function () {
                return this[cachedValue];
            }
        })
    }
}