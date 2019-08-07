import React, {useRef, useEffect} from 'react';

export const enhanceFocus = <T extends {}, K extends HTMLElement>(Wrapper: (wrapperProps: T) => JSX.Element) => {
    type Props = T & {inputRef: React.RefObject<K>};

    return (props: Props) => {
        const inputRef = useRef<K>(null);

        useEffect(() => {
            if (inputRef && inputRef.current) {
                inputRef.current.focus();
            }
        }, [inputRef.current]);

        return <Wrapper inputRef={inputRef} {...props} />;
    };
};
