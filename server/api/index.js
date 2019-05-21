const apiRouter = require('express').Router();

apiRouter.get('/', (req, res) => res.send('triggered by GET /api/'));
apiRouter.post('/add', (req, res) => res.send('triggered by POST /api/add'));

module.exports = apiRouter;
