import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import{ EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { appRoutes } from './routes';
import { NewEventComponent } from './events/shared/create-event.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventsDetailsComponent,
    NavBarComponent,
    NewEventComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [EventService,ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
