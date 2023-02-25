import axios from 'axios';

import { constants } from '../constants.js';
import { getTags } from './openai.js';

const { MEDIUM_API_KEY, MEDIUM_USER_ID } = constants;

async function createMediumPost({ content, theme }) {
	const tags = await getTags(theme);
	console.log('\n✅ tags generated');

	await axios.post(
		`https://api.medium.com/v1/users/${MEDIUM_USER_ID}/posts`,
		{
			title: theme,
			contentFormat: 'html',
			content,
			tags,
			publishStatus: 'public',
			notifyFollowers: true
		},
		{
			headers: {
				Authorization: `Bearer ${MEDIUM_API_KEY}`
			}
		}
	);

	console.log('\n✅ post published');
}

export { createMediumPost };
