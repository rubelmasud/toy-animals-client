import { useEffect } from "react"

const useSetTitle = (title) => {
    useEffect(() => {
        document.title = `Toy Animals | ${title}`
    }, [title])
}
export default useSetTitle