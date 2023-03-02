import { createPost } from './create-post.js';
import { createServer } from 'node:http';

const server = createServer(async (req, res) => {
	await createPost();

	res.end();
});

server.listen(3000);
