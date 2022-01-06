import { Component } from "@angular/core";

@Component({
  selector: "test-root",
  template: `<input [id]="myId" [disabled]="isDisabled" (change)="setValue()" value="test"/>`,
  styles: []
})

export class TestComponent {
  title = ["test", "a"]
  public myId = "testId";
  public isDisabled = true;

  setValue() {

  }
}
