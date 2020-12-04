import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import{HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddTestComponent } from './add-test/add-test.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMapComponent } from './add-map/add-map.component';
import { TestFunComponent } from './test-fun/test-fun.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddQueComponent } from './add-que/add-que.component';
import { ParticipantComponent } from './participant/participant.component';
import { QueDisplayComponent } from './que-display/que-display.component';
import { EndComponent } from './end/end.component';
import { AuthGuard } from './auth.guard';
import { GetUsersComponent } from './get-users/get-users.component';
import { GetMarksComponent } from './get-marks/get-marks.component';
import { GetMapComponent } from './get-map/get-map.component';
import { GetQuestionsComponent } from './get-questions/get-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTestComponent,
    routingComponents,
    MenuComponent,
    AddMapComponent,
    TestFunComponent,
    AssignTestComponent,
    LoginComponent,
    RegistrationComponent,
    AddQueComponent,
    ParticipantComponent,
    QueDisplayComponent,
    EndComponent,
    GetUsersComponent,
    GetMarksComponent,
    GetMapComponent,
    GetQuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
