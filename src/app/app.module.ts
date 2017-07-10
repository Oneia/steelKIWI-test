import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing.module';
import { UserDetailsModule } from './components/user-details/user-details.module';
import { SearchUsersModule } from './components/search-users/search-users.module';

import { AuthService } from './services/auth/auth.service';
import { DataGithubService } from './services/data-github/data-github.service';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { IfAuthentificationDirective } from './services/auth/if-authentification.directive';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IfAuthentificationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SearchUsersModule,
    UserDetailsModule
  ],
  providers: [
    AuthService,
    DataGithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
