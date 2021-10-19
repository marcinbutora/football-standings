import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  footballNews = [
    {
      link: 'https://www.sport.pl/pilka/7,65081,27698065,robert-lewandowski-najlepszym-pilkarzem-roku-pochwalil-sie.html',
      title:
        'Robert Lewandowski dostał niecodzienną nagrodę! Pierwsze takie w karierze',
      content:
        'Kolejne wyróżnienie Roberta Lewandowskiego. Tym razem nagroda indywidualna trafiła w ręce Polaka aż z Brazylii. To pierwsze takie wyróżnienie napastnika Bayernu Monachium w karierze. Trofeum pochwalił się w mediach społecznościowych.',
      header: 'SPORT.PL',
      data: '2021-17-10 08:41',
    },
    {
      link: 'https://sport.onet.pl/pilka-nozna/ekstraklasa/wisla-krakow-emmanuel-sarki-zdradzil-kulisy-powolania-do-kadry/2ll1qll',
      title:
        'Były piłkarz Wisły musiał zapłacić za grę w kadrze. "Nigdy tego nie zrobię"',
      content:
        'Emmanuel Sarki wyróżniał się podczas gry w Ekstraklasie. Młodzieżowy reprezentant Nigerii grał bardzo dobrze, w związku z czym zapracował na powołanie do dorosłej kadry. Reprezentował jednak nie Nigerię, lecz Haiti. Piłkarz po latach zdradził, że za debiut w narodowej kadrze żądano od niego pieniędzy, na co nie zamierzał się godzić. To właśnie dlatego ostatecznie wybrał Haiti.',
      header: 'SPORT.ONET.PL',
      data: '2021-10-16 11:24',
    },
    {
      link: 'https://sportowefakty.wp.pl/pilka-nozna/965707/kiedys-anglicy-najedli-sie-przez-niego-mnostwo-strachu-dzis-ma-nietypowa-prace',
      title:
        'Kochała i szalała za nim cała Polska. Sprawdziliśmy, co robi dziś',
      content:
        'To chyba jedyny polski piłkarz, który przeszedł do historii nie ze względu na gole, a niewykorzystane sytuacje. Marek Leśniak, który napędził stracha Anglii, dziś ma nietypową, jak na ex piłkarza, pracę. WP SportoweFakty rozmawiały z byłą gwiazdą.',
      header: 'SPORTOWEFAKTY.WP.PL',
      data: '2021-10-19 06:00',
    },
  ];
}
