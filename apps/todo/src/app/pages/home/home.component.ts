import { Component, OnInit } from '@angular/core';
import { TodoFacade } from '@nx-micro-app/shared/store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  public todoItems: String[] = [];

  constructor(private todoFacade: TodoFacade) {}

  ngOnInit() {
    this.initList();
  }

  onAdd(item: string): void {
    this.todoItems.push(item);
    this.todoFacade.addTask(item);
  }

  initList() {
    this.todoFacade.selectedTasks$.subscribe(
      (response) => (this.todoItems = [...response])
    );
  }
}
