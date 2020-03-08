import theme from 'styled-theming'

export const lightMode = {
	backgroundColor: '#F1F2F5',
	fontColor: '#545e6f',
	backgroundCardColor: '#fff',
	primaryColor: '#451771',
	secondaryColor: '#CE1F99',
	tertiaryColor: '#ff5733',
	selectedColor: '#24b373',
	success: '#545e6f',
	warning: '#f6c95b',
	danger: '#545e6f'
}

export const darkMode = {
	backgroundColor: '#000',
	fontColor: '#545e6f',
	backgroundCardColor: '#fff',
	primaryColor: '#451771',
	secondaryColor: '#CE1F99',
	tertiaryColor: '#ff5733',
	selectedColor: '#24b373',
	success: '#545e6f',
	warning: '#f6c95b',
	danger: '#545e6f'
}

const backgroundColor = theme('mode', {
		dark: `${darkMode.backgroundColor}`,
		light: `${lightMode.backgroundColor}`
	}),
	fontColor = theme('mode', {
		dark: `${darkMode.fontColor}`,
		light: `${lightMode.fontColor}`
	}),
	backgroundCardColor = theme('mode', {
		dark: `${darkMode.backgroundCardColor}`,
		light: `${lightMode.backgroundCardColor}`
	}),
	primaryColor = theme('mode', {
		dark: `${darkMode.primaryColor}`,
		light: `${lightMode.primaryColor}`
	}),
	secondaryColor = theme('mode', {
		dark: `${darkMode.secondaryColor}`,
		light: `${lightMode.secondaryColor}`
	}),
	selectedColor = theme('mode', {
		dark: `${darkMode.selectedColor}`,
		light: `${lightMode.selectedColor}`
	}),
	warning = theme('mode', {
		dark: `${darkMode.warning}`,
		light: `${lightMode.warning}`
	}),
	tertiaryColor = theme('mode', {
		dark: `${darkMode.tertiaryColor}`,
		light: `${lightMode.tertiaryColor}`
	})

export {
	backgroundColor,
	fontColor,
	backgroundCardColor,
	primaryColor,
	secondaryColor,
	tertiaryColor,
	selectedColor,
	warning
}
