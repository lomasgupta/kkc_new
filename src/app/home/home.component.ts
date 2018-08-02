import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    {image:'http://via.placeholder.com/1920x800?text=.', text: 'Sticky caramalised popcorn'},
    {image:'http://via.placeholder.com/1920x800?text=.', text: 'Text2'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
