import { useContext } from 'react'
import { PathContext } from './Context'

const styles = {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
}

export function Link({ to, children }) {
    const { navigate } = useContext(PathContext)

    return (
        <a style={styles} onClick={() => navigate(to)}>
            {children}
        </a>
    )
}
