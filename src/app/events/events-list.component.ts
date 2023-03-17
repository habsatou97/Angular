import { Component,OnInit } from "@angular/core"
import { EventService } from "./shared/events.service";
@Component({
    selector: 'events-list',
    template:`
    <div>
        <h1 class="container">New Angular Events</h1>
        <div class="row">
            <div *ngFor="let event of events" class="col-sm-6">
               <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `  
})
export class EventsListComponent implements OnInit{

    events: any    
    constructor(private eventService: EventService){
    
   }
   ngOnInit(){
    this.events=this.eventService.getEvents();
   }
}