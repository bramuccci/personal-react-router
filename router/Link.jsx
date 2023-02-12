import { useContext } from 'react'
import { PathContext } from './Router'

export function Link({ to, children }) {
    const { setCurrentPath } = useContext(PathContext)

    const onNavigation = () => {
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    return <a onClick={onNavigation}>{children}</a>
}
