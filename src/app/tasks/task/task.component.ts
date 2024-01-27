
import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "macx-task",
  templateUrl: "./task.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  constructor() {}
  ngOnInit() {}
}