import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectItem from '../../components/ProjectItem';
import projects from '../../data/projects';

const Blog = () => {
	return (
		<section>
			<Grid container spacing={4}>
				{projects.map((project) => (
					<Grid item xs={12} sm={12} md={6}>
						<ProjectItem project={project} />
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default Blog;
