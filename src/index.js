import { generateBlogPost, generatePostTheme } from './services/openai.js';
import { setUsedTheme, verifyThemeWasUsed } from './services/themes.js';
import { createMediumPost } from './services/medium.js';

async function createPost() {
	const theme = await generatePostTheme();

	const themeWasUsed = await verifyThemeWasUsed(theme);

	if (themeWasUsed) {
		return await createPost();
	}

	console.log('\n✅ theme generated');

	const content = await generateBlogPost(theme);

	await createMediumPost({ content, theme });

	await setUsedTheme(theme);
}

// a cada 3 dias
setInterval(createPost, 1000 * 60 * 60 * 24 * 3);
