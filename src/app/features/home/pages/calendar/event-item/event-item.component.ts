import { Component, OnInit, Input } from '@angular/core';
import { DataStore } from 'src/services/data.service';
import { Organizer } from 'src/models/organizer';

import { Router } from '@angular/router';

@Component({
  selector: 'cs-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Event;

  protected organizers: Organizer[] = [];
  protected date: Date;

  constructor(
    protected router: Router,
    protected dataStore: DataStore) {
    this.date = new Date();
   }

  ngOnInit() {
  }

  protected navigateToEvent(event) {
    this.router.navigate(['/event', event.id]);
  }

}
