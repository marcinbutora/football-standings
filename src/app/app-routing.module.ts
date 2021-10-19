import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RankingPageComponent } from './pages/ranking/ranking-page/ranking-page.component';
import { RankingResolverService } from './pages/ranking/service/ranking-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'ranking',
    loadChildren: () =>
      import('./pages/ranking/ranking-routing.module').then(
        (m) => m.RankingRoutingModule
      ),
    resolve: { ranking: RankingResolverService },
  },
  { path: '404', component: NotfoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
