import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-reference',
  template: `
  <h2 [style.fontSize]="'50px'" [style.color]="'green'"> Welcome {{ name }}</h2>
  <input #myInput type="text" />
  <button #button1 (click)="logMessage(myInput.value)"> log </button>
  <button (click)="name = button1.innerText"> tesst </button>
  `,
  styles: []
})
export class TemplateReference {
  name = "";

  logMessage(value: string) {
    this.name = value
  };

}
