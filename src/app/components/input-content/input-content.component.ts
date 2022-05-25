import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css']
})
export class InputContentComponent {
  @Output() updateInputNumber = new EventEmitter<any>();
  constructor() { }

  public number_input: number = 0;

  public updateNumber(): void {
    if (this.number_input) {
      if (typeof (this.number_input) === 'number') {
        this.number_input > 0 ? this.updateInputNumber.emit(parseInt(this.number_input.toString())) : this.number_input = 1
      } else {
        window.alert('please input number only!!')
      }
    }
  }
}
