export const areEqual = <T extends {[x: string]: any}>(prevProps: T, nextProps: T) => {
    const prevPropsKeys = Object.keys(prevProps);
    const nextPropsKeys = Object.keys(nextProps);

    if (prevPropsKeys.length !== nextPropsKeys.length) {
        return false;
    }

    const isKeysEqual = prevPropsKeys.every(prevKeyName =>
        nextPropsKeys.some(nextKeyName => prevKeyName === nextKeyName),
    );

    if (isKeysEqual) {
        return prevPropsKeys.every(prevKeyName => prevProps[prevKeyName] === nextProps[prevKeyName]);
    }

    return false;
};
