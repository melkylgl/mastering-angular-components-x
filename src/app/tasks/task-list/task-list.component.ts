import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "macx-task-list",
  templateUrl: "./task-list.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class TaskListComponent implements OnInit {
  tasks = [
    { id: 1, title: "Task1", done: false },
    { id: 2, title: "Task2 - fatto", done: true },
  ];
  constructor() {}
  ngOnInit() {}

  addTask(title: string) {
    this.tasks.push({
      id: 3,
      title,
      done: false,
    });
  }
}
