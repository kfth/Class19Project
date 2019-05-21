const express = require('express');
const app = express();
const apiRouter = express.Router();
const PORT = 8080;

const logger = (req, res, next) => {
  console.log('new request with GET method ', req.url, ' ', Date.now());
  next();
};

app.use(logger);
app.get('*', logger);

apiRouter.get('/', (req, res) => res.send('triggered by GET /api/'));
apiRouter.post('/add', (req, res) => res.send('triggered by POST /api/add'));
app.use('/api', apiRouter);

app.get('/', (req, res) => res.send('index page, triggered by GET /'));

app.listen(PORT, console.log('server is running on PORT: ', PORT));
