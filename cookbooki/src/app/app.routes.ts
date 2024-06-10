import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { NewRecipesComponent } from './components/pages/new-recipes/new-recipes.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'receitas',
    component: RecipesComponent
  },
  {
    path:'add-receita',
    component: NewRecipesComponent
  },
  {
    path:'favoritos',
    component: FavoritesComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
];
