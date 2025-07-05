import database from '../../database/db';
import Todo from '../models/todoModel';

export class TodoService {
    async readAll(): Promise<Todo[]> {
        const res = await database.query("SELECT * FROM public.todo")
        return res.rows;
    }

    async create(title: string): Promise<Todo>{
        const res = await database.query("INSERT INTO public.todo (title) VALUES ($1) RETURNING *", [title]);
        return res.rows[0];
    }

    async update(todo: Partial<Todo>): Promise<Todo>{
        const res = await database.query("UPDATE public.todo SET title = $1 , done = $2 WHERE id = $3", [todo.title, todo.done, todo.id]);
        return res.rows[0];
    }

    async delete(id: number): Promise<Todo>{
        const res = await database.query("DELETE FROM public.todo WHERE id = $1", [id]);
        return res.rows[0];
    }
}