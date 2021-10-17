import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ranking } from '../model/ranking';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  private readonly apiPath: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(): Observable<Ranking> {
    return this.http.get<Ranking>(this.apiPath);
  }
}
