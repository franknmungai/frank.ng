import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import markdown from '../../content/articles/prototypes.md';

const renderers = {
	code: ({ language, value }) => {
		return (
			<SyntaxHighlighter
				style={atomDark}
				language={language}
				children={value}
			/>
		);
	},
};

// const markdown = `Here is some JavaScript code:

// ~~~js
// console.log('It works!')
// ~~~
// `;
const Writeup = () => {
	return (
		<div>
			<ReactMarkdown renderers={renderers} children={markdown} />
		</div>
	);
};

export default Writeup;
