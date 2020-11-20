import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChuckQuote } from './chuck-quote';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  private readonly url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
  private readonly host = 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com';
  private readonly apiKey = 'a0c145d012mshde8b9fc3eadaa81p1b3a51jsn095b6e8f3fe2';

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(): Observable<ChuckQuote> {
    return this.httpClient.get<ChuckQuote>(this.url, {
      headers: { "x-rapidapi-key": this.apiKey,
                 "x-rapidapi-host": this.host,
                 "useQueryString": 'true' }
    });
  }

}
