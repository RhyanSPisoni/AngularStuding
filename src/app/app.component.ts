import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public form: FormGroup;
  public title: String = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      textTitle: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.required,
        ]),
      ],
    });

    this.load();

    // this.todos.push(new Todo('Algo 1', true));
    // this.todos.push(new Todo('Algo 2', false));
  }

  load() {
    this.todos = JSON.parse(localStorage.getItem('todos')!);
  }

  save() {
    const data = JSON.stringify(this.todos);

    localStorage.setItem('todos', data);
  }

  clear() {
    this.form.reset();
  }

  add() {
    const title = this.form.controls['textTitle'].value;

    this.todos.push(new Todo(title, false));
    this.save();
    this.clear();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1) {
      this.todos.splice(index, 1);
    }

    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }

  unMarkAsDone(todo: Todo) {
    todo.done = false;
    this.save();
  }
}
