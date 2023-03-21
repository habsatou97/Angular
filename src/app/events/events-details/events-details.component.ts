import { Component,OnInit } from "@angular/core";
import { EventService } from "../shared/events.service";
import {ActivatedRoute} from '@angular/router';
import { appRoutes } from "src/app/routes";
@Component({
    selector: 'events-details',
    templateUrl: "./events-details.component.html",
    styles:[
        `
        .container{ padding-left:20px; padding-right:20px;}
        .event-image{height:100px;}
        `
    ]

 
})

export class EventsDetailsComponent{

    event:any
    
    constructor(private eventService:EventService,private activatedRoute:ActivatedRoute){

    }
    ngOnInit(){
        this.event=this.eventService.getEventsByNumber(+this.activatedRoute.snapshot.params['id'])
    }

}