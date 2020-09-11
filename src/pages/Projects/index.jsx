import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ProjectItem from '../../components/ProjectItem';

const Projects = () => {
	const projects = useSelector((state) => state.projects);
	return (
		<section className="root">
			<Grid container spacing={4}>
				{projects.map((project) => (
					<Grid item xs={12} sm={12} md={6} key={project.title}>
						<ProjectItem project={project} />
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default Projects;
