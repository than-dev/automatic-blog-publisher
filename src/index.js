import { CronJob } from 'cron';

import { createPost } from './create-post';

const job = new CronJob(`0 16 * * *`, createPost);
job.start();
