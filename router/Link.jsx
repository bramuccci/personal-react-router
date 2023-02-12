import { useContext } from 'react'
import { PathContext } from './Router'

const styles = {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
}

export function Link({ to, children }) {
    const { setCurrentPath } = useContext(PathContext)

    const onNavigation = () => {
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    return (
        <a style={styles} onClick={onNavigation}>
            {children}
        </a>
    )
}
