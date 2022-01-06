import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hellow-world';

  name = "Van De Castro";
  message = "test";
  setName(value: string) {
    this.name = value;
  }
}
