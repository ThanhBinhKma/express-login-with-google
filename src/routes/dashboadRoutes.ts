import express from 'express';

 const dashboardRouter = express.Router();

dashboardRouter.get('/dashboard', (req, res) => {
    res.send('Logined')
})

export default dashboardRouter;
