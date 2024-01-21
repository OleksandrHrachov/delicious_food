import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DishesPageComponent } from './pages/dishes-page/dishes-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DishPageComponent } from './pages/dish-page/dish-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    HeaderComponent,
    FooterComponent,
    FavoritesPageComponent,
    ProfilePageComponent,
    DishesPageComponent,
    CarouselComponent,
    DishPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
