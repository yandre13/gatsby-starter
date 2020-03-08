import styled, { createGlobalStyle } from 'styled-components'
import { backgroundColor, fontColor } from './config'

export const GlobalStyle = createGlobalStyle`
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body{
 height: 100vh;
 overflow-x: hidden;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 background: ${backgroundColor};
 font-size: 16px;
 color: ${fontColor};
}
`
export const IndexWrapper = styled.main``

export const PostWrapper = styled.div``
