export function omit<T extends Record<string, any>, K extends keyof T>(
    obj: T,
    ...keys: K[]
): Omit<T, K> {
    const result = {} as Omit<T, K>;
    for (const key in obj) {
        if (!keys.includes(key as K)) {
            result[key] = obj[key];
        }
    }
    return result;
}

export function mapValues<T extends Record<string, any>, U>(
    obj: T,
    callback: (value: T[keyof T], key: keyof T) => U
): Record<keyof T, U> {
    const result = {} as Record<keyof T, U>;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = callback(obj[key], key);
        }
    }
    return result;
}

type Mergeable<T> = T extends object
    ? T extends Function
        ? T
        : {
              [K in keyof T]: Mergeable<T[K]>;
          }
    : T;

export function merge<T extends object, U extends object>(
    target: T,
    source: U
): Mergeable<T & U> {
    const merged = { ...target };

    function mergeProperty<K extends keyof U>(key: K) {
        const sourceValue = source[key];

        if (sourceValue instanceof Object && key in merged) {
            merged[key] = merge(merged[key], sourceValue);
        } else {
            merged[key] = sourceValue;
        }
    }

    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            mergeProperty(key);
        }
    }

    return merged as Mergeable<T & U>;
}
