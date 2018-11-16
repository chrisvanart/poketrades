import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './fake-backend';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { AuthGuard} from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

import { JwtInterceptor } from './jwt.interceptor';
import { ErrorInterceptor } from './error.interceptor';

import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonDetailComponent,
    MessagesComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
