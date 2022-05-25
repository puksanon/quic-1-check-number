import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public answer: boolean = false
  public option: String = ""
  public number_input!: number 

  public updateOption(option_input: String) {
    this.option = option_input
    this.calculationNumber()
  }

  public updateInputNumber(number: any) {
    this.number_input = number
    this.calculationNumber()
  }

  private calculationNumber(): void {
    if (this.option && this.number_input)
      switch (this.option) {
        case 'isPrime':
          this.answer = this.isPrime()
          break;
        default:
          this.answer = this.isFibonacci()
          break;
      }
  }

  private isPrime(): boolean {
    let check_isPrime = true;
    for (let i = 2; i < this.number_input; i++) {
      if (this.number_input % i == 0) {
        check_isPrime = false;
        break;
      }
    }
    return check_isPrime
  }

  private isFibonacci() : boolean{
    if (
      Math.sqrt((5 * Math.pow(this.number_input, 2) + 4)) % 1 == 0 ||
      Math.sqrt((5 * Math.pow(this.number_input, 2) - 4)) % 1 == 0
    ) {
      return true
    } else {
      return false
    }
  }
}
