

## About the project
The core functionality of the application revolves around streaming rock music. Utilizing APIs and media servers, the project retrieves a diverse collection of rock songs, albums, and playlists. Users can explore various genres of rock music, including classic rock, alternative rock, hard rock, and more. The application provides a user-friendly interface for searching and discovering music based on artists, albums, or songs, ensuring that users can find their favorite tracks effortlessly.

The application also includes a live streaming feature, allowing users to tune in to a virtual radio station that broadcasts rock music around the clock. Users can browse through a schedule of programs, DJ shows, and live events, and listen to their favorite rock tracks in real-time. The live-streaming feature provides an authentic radio experience, complete with DJ commentary, interviews, and promotions

## How its powered
In its current iteration, the backend of the  project utilizes Icecast, a popular streaming server software, as opposed to Node.js streams that were used in the initial version (v1) of the application. Icecast is specifically designed for audio streaming and provides robust features for broadcasting and serving audio content over the internet.

By incorporating Icecast into the backend, the project benefits from its efficient handling of audio streams, ensuring smooth and uninterrupted playback for users. Icecast supports various audio formats commonly used in online radio, such as MP3 and Ogg Vorbis, allowing the application to deliver high-quality audio streams to listeners.

Icecast also offers features like server-side playlists, live broadcasting capabilities, and seamless integration with various audio sources. These features enhance the functionality of the online rock music station, enabling the project to provide a diverse range of music content, including curated playlists, live shows, and scheduled programs.

Although the initial version (v1) of the application relied on Node.js streams, the transition to Icecast as the backend streaming solution brings improved scalability and performance. Icecast is specifically optimized for audio streaming and has proven to be a reliable choice for delivering audio content to a large number of concurrent listeners.

By leveraging Icecast as the backend streaming server, the project ensures a stable and efficient infrastructure for delivering rock music to its audience. The combination of Next.js on the front end and Icecast on the back end creates a powerful and seamless online music streaming experience for rock music enthusiasts.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Getting started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
