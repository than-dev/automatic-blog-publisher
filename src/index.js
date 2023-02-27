import { CronJob } from 'cron';

import { createPost } from './create-post.js';

const job = new CronJob(`0 16 * * *`, createPost);
job.start();
