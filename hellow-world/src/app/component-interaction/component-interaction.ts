import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "component-interaction",
  template: `<h2> hellow, {{ name }}</h2>
  <input type="text" [(ngModel)]="message"/>
  <button (click)="fireEvent()"> Fire </button>
  `,
  styles: []
})

export class ComponentInteraction {

  @Input('parentData') public name: string;
  @Output() public childEvent = new EventEmitter();
  public message = "";

  constructor() { }

  fireEvent() {
    this.childEvent.emit(this.message);
  }

}
