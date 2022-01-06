import { Component, Input } from "@angular/core";

@Component({
  selector: "pipes-testing",
  template: `
  <h2> {{ name }} </h2>
  <h2> {{ name | lowercase }} </h2>
  <h2> {{ name | uppercase }} </h2>
  <h2> {{ name | titlecase }} </h2>

  <h2> {{ name | slice: 5:6 }} </h2>
  <h2> {{ person | json }} </h2>


  <h2> {{ 5000.112222 | number:'10.1-2' }} </h2>
  <h2> {{ 5000.112222 | number: '1.3' }} </h2>
  <h2> {{ .11 | percent }} </h2>
  <h2> {{ .11 | currency }} </h2>
  <h2> {{ .11 | currency: 'EUR' :'code' }} </h2>

  <h2> {{ date | date:'short' }} </h2>
  <h2> {{ date | date:'shortDate' }} </h2>
  <h2> {{ date | date:'shortTime' }} </h2>
  <h2> {{ date | date:'medium' }} </h2>
  `,
  styles: []
})

export class TestPipes {

  @Input() public name: string;
  public message: string = "Welcome";
  public person = {
    "firstName": "Van",
    "lastName": "De Castro"
  }

  public date = new Date();

}
