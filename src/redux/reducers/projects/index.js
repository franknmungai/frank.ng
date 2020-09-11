import projects from './data';
import createSlug from './create-slug';
const nextprojects = projects.map((project) => ({
	...project,
	slug: createSlug(project.title),
}));

const projectsReducer = (state = nextprojects, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default projectsReducer;
