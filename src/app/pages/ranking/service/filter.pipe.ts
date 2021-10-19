import { Pipe, PipeTransform } from '@angular/core';
import { Ranking, Standing } from '../model/ranking';

@Pipe({
  name: 'filterSearch',
})
export class FilterPipe implements PipeTransform {
  transform(ranking: Standing[] | undefined, termToSearch: any) {
    if (termToSearch === undefined) return ranking;
    return ranking?.filter(function (item) {
      return (
        item.team.name.toLowerCase().includes(termToSearch.toLowerCase()) ||
        item.stats[0].displayValue.match(termToSearch)
      );
    });
  }
}
