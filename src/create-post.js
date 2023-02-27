import { generateBlogPost, generatePostTheme } from './services/openai.js';
import { createMediumPost } from './services/medium.js';

async function createPost() {
	const theme = await generatePostTheme();

	console.log('\n✅ theme generated');

	const content = await generateBlogPost(theme);

	await createMediumPost({ content, theme });
}

export { createPost };
