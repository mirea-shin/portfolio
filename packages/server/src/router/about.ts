import express from 'express';

import * as AboutController from '../controller/about';

const about = express.Router();

// TODO /featured /:id/select => 네이밍 통합하기

about.get('/', AboutController.getAll);
about.get('/featured', AboutController.getFeatured);
about.get('/:id', AboutController.getById);

about.patch('/:id/select', AboutController.select);
about.post('/', AboutController.create);
about.put('/:id', AboutController.update);
about.delete('/:id', AboutController.remove);

export default about;
