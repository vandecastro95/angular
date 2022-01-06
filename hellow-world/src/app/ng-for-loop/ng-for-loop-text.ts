import { Component } from "@angular/core";

@Component({
  selector: "ng-for-loop-test",
  template: `
    <div *ngFor="let color of colors; index as i">
      <button [style.backgroundColor] = "color" (click)="selectedColor = color">{{i}} {{color}}</button>
    </div>
    <h2 *ngIf="!!selectedColor" [style.color]="selectedColor">{{selectedColor}}</h2>
  `,
  styles: []
})

export class NgForLoopTest {
  public selectedColor = "";
  public colors = ["red", "blue", "green", "yellow"]

}
