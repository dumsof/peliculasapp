import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = '88615a5b6f5fd1c69ad5b385f627fb36';
  private urlMoviedb = 'https://developers.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopulares() {
    let url = `${this.urlMoviedb}/movie/popular?api_key=${this.apikey}&language=es&page=1`;
    return this.http.get(url).pipe(
      map(resp => resp)
    );
  }
}
