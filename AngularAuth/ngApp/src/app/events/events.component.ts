import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: any[] = [];
  constructor(private _events: EventsService) { }

  ngOnInit(): void {
    this._events.getEvents().subscribe(
      data => this.events = data,
      error => console.log(error)
    )
  }

  getEvents() {

  }


}
