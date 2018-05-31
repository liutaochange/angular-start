import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { }
}
