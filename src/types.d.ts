declare class Ref<T = any> {
    value: T;
}

declare function ref<T = any>(value: T): Ref<T>

declare class Computed<T = any> {
    readonly value: T;
}

declare function computed<T = any>(cb: () => T): Computed<T>

declare function watchEffect(cb: () => void): void

declare function watch<T = any>(whatToWatch: () => T, handler: (newVal: T, previousVal: T) => void): void

export { ref, computed, watchEffect, watch };