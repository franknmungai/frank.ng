import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Articles = () => {
	const items = ['1', '2', '3', '4'];
	return (
		<Grid container spacing={4}>
			{items.map((item) => (
				<Grid item xs={12} sm={12} md={6}>
					<Paper variant="outlined" />
				</Grid>
			))}
		</Grid>
	);
};

export default Articles;
