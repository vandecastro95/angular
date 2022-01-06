import { Component } from "@angular/core";

@Component({
  selector: "ng-switch-test",
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">red</div>
      <div *ngSwitchCase="'blue'">blue</div>
      <div *ngSwitchCase="'green'">green</div>
      <div *ngSwitchDefault>pick again</div>
    </div>

    <button [style.backgroundColor]="'red'" (click)="color = 'red'">red</button>
    <button [style.backgroundColor]="'blue'" (click)="color='blue'">blue</button>
    <button [style.backgroundColor]="'green'" (click)="color = 'green'">green</button>
  `,
  styles: []
})

export class NgSwitchTest {
  color = "red";

}
