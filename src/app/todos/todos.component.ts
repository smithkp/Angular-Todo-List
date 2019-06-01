import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {TODOS} from '../TodoList';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = TODOS;
  count = 0;

  todoForm = new FormGroup({
    todo: new FormControl(),
  });

  constructor() {
  }

  ngOnInit() {
  }
  addTodo(): void {
    const addedTodo = new Todo();
    addedTodo.whatTodo = this.todoForm.get('todo').value;
    addedTodo.id = this.count++;
    this.todos.push(addedTodo);
    this.todoForm.reset();
  }
  handleChange(todo: Todo): void {
    const radio = document.getElementById('task' + todo.id);
    if (radio.style.getPropertyValue('text-decoration') === 'line-through') {
      radio.style.textDecoration = 'none';
      document.getElementById('status' + todo.id).className = 'bg-danger';
    } else {
      radio.style.setProperty('text-decoration', 'line-through');
      document.getElementById('status' + todo.id).className = 'bg-success';
    }
  }
  handleDel(selectedTodo: Todo) {
    this.todos.splice(selectedTodo.id, 1);
    let count = 0;
    this.todos.forEach((todo: Todo) => {
      todo.id = count++;
    });
    console.log(selectedTodo.id);
  }

}
