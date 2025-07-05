import express, {Router} from 'express';
import todoController from '../controllers/todoController';

const router: Router = express.Router();

router.get('/', (req, res, next) => todoController.browse(req, res, next))
router.post('/', (req, res, next) => todoController.add(req, res, next));
router.put('/:id', (req, res, next) => todoController.edit(req, res, next));
router.delete('/:id', (req, res, next) => todoController.delete(req, res, next));

export default router;