import { Component } from "@angular/core";

@Component({
  selector: "ng-if",
  template: `
    <!-- <div *ngIf="displayName; else elseBlock">
      <app-event-binding></app-event-binding>
    </div>
    <ng-template #elseBlock>
      <class-binding></class-binding>
    </ng-template> -->

    <div *ngIf="displayName; then thenBlock else elseBlock"></div>
    <ng-template #elseBlock>
      test else block
    </ng-template>
    <ng-template #thenBlock>
      test then block
    </ng-template>
    <button (click)="displayName = !displayName"> toggle </button>
  `,
  styles: []
})

export class NgIf {
  public displayName = true;


}
