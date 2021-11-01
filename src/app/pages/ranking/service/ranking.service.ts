import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ranking } from '../model/ranking';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private readonly apiPath: string =
    'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc';

  constructor(private http: HttpClient) {}

  getData(): Observable<Ranking> {
    return this.http.get<Ranking>(this.apiPath);
  }
}
