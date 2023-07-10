import React from 'react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'

const defaultTheme = {
    colors: {
        primary: '#D26AC2'
    }
}

const StyleProvider = ({ theme = defaultTheme, children, namespace = 'micro-frontend-react-ui', ...props }) => {
    const myCache = createCache({
        key: namespace,
        ...props
    })

    return (
        <CacheProvider value={myCache}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default StyleProvider