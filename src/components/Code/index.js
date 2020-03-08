import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import { Pre, LineNo, CopyCode } from './styles'
import { copyToClipboard } from '../../utils/copy-to-clipboard'

import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

export const Code = ({ codeString, language, ...props }) => {
	if (props['react-live']) {
		return (
			<LiveProvider code={codeString} noInline={true} theme={theme}>
				<LiveEditor />
				<LiveError />
				<LivePreview />
			</LiveProvider>
		)
	}

	const handleClick = () => {
		copyToClipboard(codeString)
	}

	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			language={language}
			theme={theme}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Pre className={className} style={style}>
					<CopyCode onClick={handleClick}>Copy</CopyCode>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							<LineNo>{i + 1}</LineNo>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</Pre>
			)}
		</Highlight>
	)
}
