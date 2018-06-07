import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() private rating: number

  private stars: boolean[]

  constructor() { }

  ngOnInit() {
    this.starsInit()
  }
  starsInit(): void {
    this.stars = []
    for (let i=0;i<5;i++) {
      this.stars.push(i >= this.rating)
    }
  }
}
