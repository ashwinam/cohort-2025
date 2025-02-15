const { Router } = require('express');

const creatorRouter = Router();

creatorRouter.post('/signup', (req, res) => {});
creatorRouter.post('/signin', (req, res) => {});
creatorRouter.post('/course', (req, res) => {});
creatorRouter.delete('/course', (req, res) => {});
creatorRouter.post('/course/:id/content', (req, res) => {});

module.exports = creatorRouter;