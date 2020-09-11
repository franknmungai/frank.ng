import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
// const Content = lazy(() => importMDX('../content/articles/prototypes.mdx'));

const Article = () => {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>{/* <Content /> */}</Suspense>
		</div>
	);
};

export default Article;
