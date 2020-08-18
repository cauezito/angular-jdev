import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithComponentFactories } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; //ajax
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/HeaderInterceptor';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/newUser/new-user.component';

export const appRoutes: Routes = [
  {path : 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'users', component: UserComponent},
  {path: 'newUser', component: NewUserComponent},
  {path: 'newUser/:id', component: NewUserComponent},
];

export const routes  : ModuleWithProviders = RouterModule.forRoot(appRoutes);



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
