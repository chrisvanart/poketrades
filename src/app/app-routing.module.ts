import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
