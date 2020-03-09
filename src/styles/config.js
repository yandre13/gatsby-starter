import { createGlobalStyle } from 'styled-components'

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
 color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
  background: ${props => (props.theme.isDark ? '#262626' : '#ffffff')};
  transition: background-color .7s ease;
}
`

export const dark = {
	backgroundColor: '#333',
	primaryColor: '#f2f2f2',
	secondaryColor: '#F063B8',
	fontColor: '#4B5D68',
	buttonColor: '#9C69E2'
}

export const light = {
	backgroundColor: '#F1F2F5',
	primaryColor: '#212353',
	secondaryColor: '#F063B8',
	fontColor: '#4B5D68',
	buttonColor: '#9C69E2'
}
