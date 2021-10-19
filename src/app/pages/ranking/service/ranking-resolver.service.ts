import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Ranking, Standing } from '../model/ranking';
import { RankingService } from './ranking.service';

@Injectable({
  providedIn: 'root',
})
export class RankingResolverService implements Resolve<Ranking> {
  constructor(private rankingService: RankingService) {}

  resolve(): Observable<Ranking> {
    return this.rankingService.getData();
  }
}
