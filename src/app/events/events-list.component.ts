import { Component,OnInit } from "@angular/core"
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/events.service"
//declare let  toastr: any

@Component({
    template:`
    <div>
        <h1 class="container">New Angular Events</h1>
        <div class="row">
            <div *ngFor="let event of events" class="col-sm-6">
               <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `  
})
export class EventsListComponent implements OnInit{

    events: any    
    constructor(private eventService: EventService,private toastrService:ToastrService){
    
   }
   ngOnInit(){
    this.events=this.eventService.getEvents();
   }

   handleThumbnailClick(eventName:any){
    let toastr: any
    this.toastrService.success(eventName)
   }
}