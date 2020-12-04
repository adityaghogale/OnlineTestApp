import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMapComponent } from './add-map/add-map.component';
import { AddQueComponent } from './add-que/add-que.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { AuthGuard } from './auth.guard';
import { EndComponent } from './end/end.component';
import { GetQuestionsComponent } from './get-questions/get-questions.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { LoginComponent } from './login/login.component';
import { ParticipantComponent } from './participant/participant.component';
import { QueDisplayComponent } from './que-display/que-display.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestFunComponent } from './test-fun/test-fun.component';

const routes : Routes = [
    {path:'login', component:LoginComponent},
    {path:'registration', component:RegistrationComponent},
    {path:'addTest', component: AddTestComponent ,canActivate: [AuthGuard]},
    {path:'addQue', component: AddQueComponent ,canActivate: [AuthGuard]},
    {path:'addMap', component: AddMapComponent ,canActivate: [AuthGuard]},
    {path:'testFun', component: TestFunComponent ,canActivate: [AuthGuard]},
    {path:'assignTest', component: AssignTestComponent ,canActivate: [AuthGuard]},
    {path:'app-menu', component: AssignTestComponent ,canActivate: [AuthGuard]},
    {path:'participant',component:ParticipantComponent, canActivate: [AuthGuard]},
    {path:'queDisplay',component:QueDisplayComponent, canActivate: [AuthGuard]},
    {path:'end',component:EndComponent, canActivate: [AuthGuard]},
    {path:'getusers',component:GetUsersComponent,canActivate: [AuthGuard]},
    {path:'getquestions',component:GetQuestionsComponent,canActivate: [AuthGuard]},
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}

export const routingComponents = [AddTestComponent,AddMapComponent,TestFunComponent,AssignTestComponent,LoginComponent,RegistrationComponent,AddQueComponent,QueDisplayComponent,EndComponent]