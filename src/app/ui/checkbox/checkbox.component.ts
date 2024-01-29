import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "macx-checkbox",
  templateUrl: "./checkbox.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() checked: boolean;
  @Output() outCheck = new EventEmitter<boolean>();

  constructor() {}

  check(checked: boolean) {
    this.outCheck.emit(checked);
  }
}
