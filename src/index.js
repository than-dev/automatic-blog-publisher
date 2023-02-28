import { createPost } from './create-post.js';

setInterval(createPost, 1000 * 60 * 60 * 24);
