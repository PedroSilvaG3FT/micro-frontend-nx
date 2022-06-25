import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  public todoItems: String[] = [];

  constructor() {}

  ngOnInit() {}

  onAdd(item: string): void {
    this.todoItems.push(item);
  }
}
