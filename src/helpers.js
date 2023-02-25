import { topics } from './config.js';

function getTitleFromHtml(html) {
	const tag = html.includes('<title>') ? 'title' : 'h1';
	const regexExpression = `(?<=<${tag}>).*?(?=<\/${tag}>)`;
	const getTitle = new RegExp(regexExpression);

	const title = getTitle.exec(html)[0];

	return title;
}

function getTopic() {
	const minValue = 0;
	const maxValue = topics.length;

	const randomNumber = Math.floor(
		Math.random() * (maxValue - minValue) + minValue
	);

	const topic = topics[randomNumber];

	return topic;
}

export { getTitleFromHtml, getTopic };
