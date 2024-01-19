import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { DishesPageComponent } from './pages/dishes-page/dishes-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'dishes',
    component: DishesPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
  },
  {
    path: 'signup',
    component: SignUpPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
