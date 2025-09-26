import express from 'express';

import * as ProjectsController from '../controller/projects';

const projects = express.Router();

projects.get('/', ProjectsController.getAll);
projects.get('/:id', ProjectsController.getById);
projects.post('/', ProjectsController.create);
projects.put('/:id', ProjectsController.update);
projects.delete('/:id', ProjectsController.remove);

export default projects;
