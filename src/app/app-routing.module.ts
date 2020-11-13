import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegistrationComponent } from './registration/registration.component';
import { TvComponent } from './tv/tv.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "movies", canActivate: [AuthenticationGuard], component: MoviesComponent },
  { path: "login" ,component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "people", canActivate: [AuthenticationGuard] , component: PeopleComponent },
  { path: "tv", canActivate: [AuthenticationGuard], component: TvComponent },
  { path: "moviesDetails/:category/:id", canActivate: [AuthenticationGuard], component: MoviesDetailsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
