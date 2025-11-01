import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter, withHashLocation } from '@angular/router';
import { importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(FormsModule,ReactiveFormsModule,HttpClientModule),
    provideZonelessChangeDetection()
  ]
}).catch(err => console.error(err));