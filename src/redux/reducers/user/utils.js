export const updateTheme = (state) => {
	return {
		theme: state.theme === 'light' ? 'dark' : 'light',
	};
};
