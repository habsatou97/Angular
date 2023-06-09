import { Routes } from "@angular/router";

import { EventsListComponent } from "./events/events-list.component";
import { EventsDetailsComponent } from "./events/events-details/events-details.component";
import { NewEventComponent } from "./events/shared/create-event.component";



export const appRoutes:Routes=[

    {path: 'events/new', component:NewEventComponent},
    {path: 'events', component:EventsListComponent},
    {path: 'events/:id', component:EventsDetailsComponent},
    {path: '', redirectTo: '/events',pathMatch:'full'}
]