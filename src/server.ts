import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log('🏓 Server started s on http://localhost:3333/');
});

export default app;
