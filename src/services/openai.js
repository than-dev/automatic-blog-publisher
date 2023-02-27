import { Configuration, OpenAIApi } from 'openai';
import { constants } from '../constants.js';
import { getTopic } from '../helpers.js';

const configuration = new Configuration({
	apiKey: constants.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function generateBlogPost(theme) {
	const response = await openai.createCompletion({
		prompt: `write a blog post about "${theme}" with a title and subtitle in html format`,
		model: 'text-davinci-003',
		max_tokens: 3000,
		temperature: 0.7
	});

	console.log('\n✅ content generated');

	const content = response.data.choices[0].text;

	return content;
}

async function getTags(theme) {
	const response = await openai.createCompletion({
		prompt: `give me 3 tags related "${theme}"`,
		model: 'text-babbage-001',
		max_tokens: 100,
		temperature: 0
	});

	const content = response.data.choices[0]?.text;

	return content.toLowerCase().trim().replaceAll(' ', '').split(',');
}

async function generatePostTheme() {
	const topic = getTopic();

	const response = await openai.createCompletion({
		prompt: `generate an original blog theme (single line) about "${topic}"`,
		model: 'text-davinci-003',
		max_tokens: 70,
		temperature: 1
	});

	const content = response.data.choices[0].text.trim();

	return content;
}

export { generateBlogPost, generatePostTheme, getTags };
