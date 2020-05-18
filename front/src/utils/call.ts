import {useCallback, useState} from "react";
import {notification} from "antd";

export const useSafeCall = (callBack: Function): any => {
    const [isLoading, setIsLoading] = useState(false)
    const result: any = []
    result.push(isLoading)
    // @ts-ignore
    result.push(useCallback(async (...arg) => {
        try {
            setIsLoading(true)
            await callBack(...arg)
        } catch (err) {
            if (err.message && !err.ignored) {
                console.error(err)
                notification["error"]({
                    message: "Oups",
                    description: err.message,
                    onClose: () => {
                    }
                },)
            }
        } finally {
            setIsLoading(false)
        }
    }, [callBack]))
    return result
}
