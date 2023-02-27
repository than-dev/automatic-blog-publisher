import { createPost } from './create-post.js';

import { createServer } from 'node:http';

const server = createServer(async (req, res) => {
	if (req.method === 'POST') {
		await createPost();
		return res.end(JSON.stringify({ message: 'article created with success' }));
	} else {
		res.end();
	}
});

server.listen(3000);
