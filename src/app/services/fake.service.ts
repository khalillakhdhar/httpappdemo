import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class FakeService {
url="https://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) { }
  getTodos()
  {
    return this.http.get<Todo[]>(this.url);
  }
  getTodoByid(id:number)
  {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }
  deletTodoByid(id:number)
  {
    return this.http.delete<Todo>(`${this.url}/${id}`);
  }
  createTodo(todo:Todo) {
  return this.http.post<Todo[]>(this.url,todo);
  }
}
