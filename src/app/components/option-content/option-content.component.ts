import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-option-content',
  templateUrl: './option-content.component.html',
  styleUrls: ['./option-content.component.css']
})
export class OptionContentComponent {
  @Output() updateOption = new EventEmitter<any>();
  option_selecter : Array<string> = [
    'isPrime',
    'isFibonacci'
  ]
  select_option : string = ""
  constructor() {}

  update() : void {
    this.updateOption.emit(this.select_option)
  }

}
