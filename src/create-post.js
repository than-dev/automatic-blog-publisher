import { generateBlogPost, generatePostTheme } from './services/openai.js';
import { createMediumPost } from './services/medium.js';

async function createPost() {
	const startDate = new Date();

	const theme = await generatePostTheme();

	console.log('\n✅ theme generated');

	const content = await generateBlogPost(theme);

	await createMediumPost({ content, theme });

	console.log(`${(new Date() - startDate) / 1000}s`);
}

export { createPost };
