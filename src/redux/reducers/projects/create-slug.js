function createSlug(value) {
	return value
		.replace(/[^a-z0-9_]+/gi, '-')
		.replace(/^-|-$/g, '')
		.toLowerCase();
}

export default createSlug;
