import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {StudentsComponent} from './students/students.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LecturesComponent} from './lectures/lectures.component';
import {RoomsComponent} from './rooms/rooms.component';
import {FormsModule} from "@angular/forms";
import {SettingsComponent} from './settings/settings.component';
import {HttpClientModule} from "@angular/common/http";
import {SettingsService} from "./settings/settings.service";
import {StudentService} from "./students/student.service";
import {RoomService} from "./rooms/room.service";
import {LectureService} from "./lectures/lecture.service";


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    LecturesComponent,
    RoomsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SettingsService,
    StudentService,
    RoomService,
    LectureService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
