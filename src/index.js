import { createPost } from './create-post.js';
import { createServer } from 'node:http';
import { CronJob } from 'cron';

const server = createServer(async (req, res) => {
	res.end();
});

server.listen(3000);

const job = new CronJob(`0 6 * * *`, createPost);
job.start();
