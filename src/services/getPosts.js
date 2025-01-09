import pc from 'picocolors';

function getPosts(server, database) {
    // // Get between 10 - 50 movies
    // server.get('/api/movies/:limit?', async (request, response) => {
    //     try {
    //         const movies = database.collection('movies');
    //         const maxLimit = 50;
    //         const defaultLimit = 10;
    //         const limit = Math.min(parseInt(request.params.limit) || defaultLimit, maxLimit);

    //         const movieData = await movies.find().limit(limit).toArray();

    //         if (movieData.length === 0) {
    //             console.error(pc.bold('[Error] No movies found'));
    //             return response.status(404).json({ error: 'No movies found' });
    //         }

    //         response.json(movieData);
    //     } catch (error) {
    //         console.error(`${pc.bold('[Error]')} ${error}`);
    //         response.status(500).json({ error: 'Internal Server Error' });
    //     }
    // });




}

export default getPosts;

