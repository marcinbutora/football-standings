import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RankingPageComponent } from './pages/ranking/ranking-page/ranking-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ranking', component: RankingPageComponent },
  { path: '404', component: NotfoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
