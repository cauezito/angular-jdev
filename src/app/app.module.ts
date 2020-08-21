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
import { AuthGuard } from './service/auth.guard';
import {NgxMaskModule, IConfig } from 'ngx-mask';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const appRoutes: Routes = [
  {path : 'home', component : HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component : LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'users', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'newUser', component: NewUserComponent, canActivate: [AuthGuard]},
  {path: 'newUser/:id', component: NewUserComponent, canActivate: [AuthGuard]},
];

export const routes  : ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const optionsMask : Partial<IConfig> | (() =>Partial<IConfig>) = {};


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
    HttpInterceptorModule,
    NgxMaskModule.forRoot(optionsMask),
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
