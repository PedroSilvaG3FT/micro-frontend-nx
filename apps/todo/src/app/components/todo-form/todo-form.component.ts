import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  public task = '';

  constructor() {}

  ngOnInit() {}

  handleSubmit() {
    if (!this.task.trim()) return;
    this.onSubmit.emit(this.task);

    this.task = '';
  }
}
