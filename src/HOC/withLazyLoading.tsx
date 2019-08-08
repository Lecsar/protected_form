/* eslint-disable  react-hooks/exhaustive-deps */

import React, {useRef, useEffect, useState, RefObject} from 'react';

type ConnectedProps<T> = T & {watchedPropName: Exclude<keyof T, 'watchedPropName'>};

type WrappedComponentProps<T> = Omit<T, 'watchedPropName'> & {forwaredRef: RefObject<any>};

interface LazyProps<T> {
    onLazyLoading: () => void;
    connectedProps: ConnectedProps<T>;
}

const withLazyLoading = <T extends {}>({onLazyLoading, connectedProps: {watchedPropName, ...props}}: LazyProps<T>) => (
    WrappedComponent: (props: WrappedComponentProps<T>) => JSX.Element,
) => {
    const [isLoading, setLoading] = useState(false);

    const listRef = useRef<HTMLDivElement>(null);
    const windowHeight = window.innerHeight;

    const shouldLoadAdditionalContent = () => {
        if (onLazyLoading && !isLoading && listRef.current) {
            const {top, height: listHeight} = listRef.current.getBoundingClientRect();
            const invisibleSpace = listHeight - windowHeight;

            if (top + invisibleSpace < 0) {
                setLoading(true);
            }
        }
    };
    useEffect(() => {
        document.addEventListener('scroll', shouldLoadAdditionalContent);

        return () => document.removeEventListener('scroll', shouldLoadAdditionalContent);
    }, []);

    useEffect(() => setLoading(false), [props[watchedPropName]]);

    useEffect(() => {
        if (isLoading) {
            onLazyLoading();
        }
    }, [isLoading]);

    return <WrappedComponent forwaredRef={listRef} {...props} />;
};

export default withLazyLoading;
