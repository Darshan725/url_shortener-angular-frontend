import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';

export const routes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'urlShortener', component: UrlShortenerComponent },
];
