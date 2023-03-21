import { Component } from "@angular/core";
import{ Router} from "@angular/router";

@Component ({ 

  template:
    `<h1> New Event</h1>
    <hr>
    <div class="col-md-6">
     <h3> [Creation Evenement]</h3>
     <br>
     <br>
     <button type="submit" class="btn btn-primary"> Save</button>
     <button type="button" class="btn btn-default" (click)="cancel()"> Cancel </button>
    </div> ` 
})


export class NewEventComponent{

    constructor(private router:Router){
    }
 

    cancel(){
        this.router.navigate(['/events'])

    }

    /* event: any
    event1:any
    constructor(newEventComponent:NewEventComponent){

    }
   ngOnInit(){
        //event1=new event();
        this.event.name=event1.name;
        this.event.time=event1.time;
        this.event.location.address=event1.location.address;
        this.event.location.country=event1.location.country;
        this.event.location.city=event1.location.city;

    }*/


}