import { Component } from "@angular/core"
@Component({
    selector: 'events-list',
    template:`
    <div>
        <h1 class="container">New Angular Events</h1>
        <hr/>
           <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `  
})
export class EventsListComponent{
    event1={
        id: 1,
        name:'Angular Connect',
        date: '2024-12-08',
        time: '10:00 am',
        price: '15000',
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: 'Ndendory kadiel',
            city: 'Matam',
            country: 'Senegal'
        }
    }
}