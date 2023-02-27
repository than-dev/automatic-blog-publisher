import 'dotenv/config';

import { createServer } from 'node:https';
import { createPost } from './create-post';

const server = createServer(async (req, res) => {
	if (req.method === 'POST') {
		await createPost();
	}

	res.end();
});

server.listen(process.env.PORT || 3000);
