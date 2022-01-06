import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  template: `

    <input [(ngModel)]="name" type="text">
    {{ name }}
  `,
  styles: []
})
export class TwoWayBinding {
  name = "";

  logMessage(value: string) {
    this.name = value
  };

}
