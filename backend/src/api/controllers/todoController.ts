import { Request, Response, NextFunction } from "express";
import { TodoService } from "../services/todoService";

class TodoController {
  private readonly todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
  }

  async browse(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.todoService.readAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async add(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { title } = req.body;
      const todo = await this.todoService.create(title);
      res.status(201).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const todo = {
        id: parseInt(req.params.id),
        title: req.body.title,
        done: req.body.done,
      };
      const updated = await this.todoService.update(todo);
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deleted = await this.todoService.delete(parseInt(req.params.id));
      res.status(204).json(deleted);
    } catch (error) {
      next(error);
    }
  }
}

export default new TodoController(); 