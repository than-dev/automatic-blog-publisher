import { topics } from './config.js';

function getTopic() {
	const minValue = 0;
	const maxValue = topics.length;

	const randomNumber = Math.floor(
		Math.random() * (maxValue - minValue) + minValue
	);

	const topic = topics[randomNumber];

	return topic;
}

export { getTopic };
