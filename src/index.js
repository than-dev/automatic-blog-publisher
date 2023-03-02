import { createPost } from './create-post.js';
import { createServer } from 'node:http';

const server = createServer(async (req, res) => {
	res.end();
});

server.listen(3000);

setInterval(createPost, 1000 * 60 * 3);
