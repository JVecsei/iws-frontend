import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {HomeComponent} from "./home/home.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {LecturesComponent} from "./lectures/lectures.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'lectures', component: LecturesComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
