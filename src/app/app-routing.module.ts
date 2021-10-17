import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RankingPageComponent } from './pages/ranking/ranking-page/ranking-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ranking', component: RankingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
