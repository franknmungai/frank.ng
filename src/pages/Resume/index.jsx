import React from 'react';
import PDFViewer from '@bit/frank_ng.react-pdf.pdf-viewer';
import token from '../../token';

// Private
const Resume = () => {
	const URL = `https://firebasestorage.googleapis.com/v0/b/shopify-6616e.appspot.com/o/Frank's%20Resume%20(2).pdf?alt=media&token=${token}`;
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				'z-index': '5',
				position: 'relative',
				top: 0,
				left: 0,
			}}
		>
			<PDFViewer src={URL} />
		</div>
	);
};

export default Resume;
