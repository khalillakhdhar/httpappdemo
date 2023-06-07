import { Component } from '@angular/core';
import { FakeService } from './services/fake.service';
import { Todo } from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpappdemo';
  todos:Todo[]=new Array<Todo>();
  constructor( private api:FakeService)
  {
    this.api.getTodos().subscribe((data)=>{
      this.todos=data;
      //console.log("liste des todo",this.todos);
    })

  }
addTodo()
{
let todo=new Todo();
todo.completed=false;
todo.title="test1";
todo.userId=4;
this.api.createTodo(todo).subscribe((data)=>
{
  console.log(data);
});
//console.log("created",todo);

}
deletetodo()
{
  this.api.deletTodoByid(4).subscribe(data=>{
let d=data;
console.log("deleted",d);

  });

}
}
