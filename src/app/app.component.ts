import { Component } from '@angular/core';
import { ChuckNorrisService } from './chuck-norris.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quote = "Click for Chuck Norris Quote";

  constructor(private chuckNorrisService: ChuckNorrisService)  { }

  getQuote() {
    this.chuckNorrisService.getRandomQuote().subscribe(
      data => { this.quote = data.value }
    );
  }
}
