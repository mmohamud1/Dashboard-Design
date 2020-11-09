import { createGlobalStlye } from 'styled-components'

export const GlobalStyles = createGlobalStlye`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.textColor};
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        transition: all 0.2s linear;
    }
`