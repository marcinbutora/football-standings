import { Component, OnInit } from '@angular/core';
import { Ranking } from '../model/ranking';
import { RankingService } from '../service/ranking.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss'],
})
export class RankingPageComponent implements OnInit {
  rankingItemList: Ranking | undefined;

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList() {
    return this.rankingService.getData().subscribe((item) => {
      this.rankingItemList = item;
    });
  }
}
