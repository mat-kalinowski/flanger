import Fastify from 'fastify'
const ytdl = require('ytdl-core');
const fs = require('fs');

const fastify = Fastify();

fastify.get('/', async (request, reply) => {
  return 'Hello there! 👋';
})

// fastify.get('/download-yt-video', async (request, reply) => {
//     ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
//     .pipe(fs.createWriteStream('audio.mp3'));
//     return fs.createReadStream('audio.mp3')
// })

fastify.get('/download-yt-video', async (request, reply) => {
    const video = ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ', {filter: "audioonly"})
    return video
})

const start = async () => {
  try {
    await fastify.listen({ port: 8080 });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();