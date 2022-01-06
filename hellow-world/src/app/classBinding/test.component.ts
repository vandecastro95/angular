import { Component } from "@angular/core";

@Component({
  selector: "class-binding",
  template: `
  <h2>
    welcome {{ name }}
  </h2>
    <h2 [class]="successClass">test</h2>
    <h2 [class.text-danger]="hasError">Text</h2>


    <h2 [ngClass]="messageClasses">Text</h2>


    <h2 [ngStyle]="messageStyles">Text styles</h2>
  `,
  styles: [
    `
    .text-success {
      color: green;
    }

    .text-danger {
      color: red;
    }

    .text-special {
      font-style: italic;
    }
    `
  ]
})

export class ClassBinding {

  public name = "testId";
  public successClass = `text-success`;
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger:": this.hasError,
    "text-special": this.isSpecial
  }

  public messageStyles = {
    color: "blue",
    fontSize: "24px"
  }


}
