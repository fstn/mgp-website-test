import {useCallback, useEffect, useState} from "react";

export function useWindowSize() {
    const isClient = typeof window === 'object';

    const getSize = useCallback(() => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }, [isClient])

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect((): any => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

export const scrollToBottom = (ref: any) => setTimeout(() => {
    // @ts-ignore
    ref?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}, 0)
