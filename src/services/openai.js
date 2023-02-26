import { Configuration, OpenAIApi } from 'openai';
import { constants } from '../constants.js';
import { getTopic } from '../helpers.js';

const configuration = new Configuration({
	apiKey: constants.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function generateBlogPost(theme) {
	const response = await openai.createCompletion({
		prompt: `write a long blog post about "${theme}" with a title a subtitle and an image in html format`,
		model: 'text-davinci-003',
		max_tokens: 3900,
		temperature: 0.7
	});

	console.log('\n✅ content generated');

	const content = response.data.choices[0].text;

	return content;
}

async function getTags(theme) {
	const response = await openai.createCompletion({
		prompt: `give me 3 tags related this "${theme}"`,
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
		prompt: `generate just one blog theme about ${topic}`,
		model: 'text-davinci-003',
		max_tokens: 40
	});

	const content = response.data.choices[0].text.trim();

	return content;
}

export { generateBlogPost, generatePostTheme, getTags, getImage };
