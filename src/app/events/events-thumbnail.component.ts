import { style } from "@angular/animations";
import { Component,Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template:`
    <div [routerLink]="['/events',event.id]"class="well hoverwell thumbnail"> 
      <h2>{{event?.name}}</h2>
      <div> Date:{{event?.date}} </div>
      <div> Time: {{event?.time}}</div>
      <div [ngSwitch]="event?.time">
      <span *ngSwitchCase=" '8:00 am'">Early Start</span>
      <span *ngSwitchCase=" '9:00 am'">Normal Start</span>
      <span *ngSwitchCase=" '10:00 am'">Late Start</span>
      </div>
      <div> Price: {{event?.price}}\FCFA</div>
      <div>
          <span> Location:{{event?.location.address}}</span>
          <span class="pad-left"> {{event?.location.city}},{{event?.location.country}}</span>
      </div>
    </div>
    `,
    styles:[`
           .thumbnail {min-height: 210px;}
           .pad-left{margin-left: 10px;}
           .well { color:#bbb}
    
          `]

})

export class EventThumbnailComponent{
   @Input() event:any
   someProperty:any ="Habsatou"

   logFoo()
   {
    console.log("foo");
   }

}