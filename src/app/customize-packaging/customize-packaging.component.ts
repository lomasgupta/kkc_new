import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-packaging',
  templateUrl: './customize-packaging.component.html',
  styleUrls: ['./customize-packaging.component.scss']
})
export class CustomizePackagingComponent implements OnInit {
  slides = [
    {img: "././assets/packaging.png", text:'text1'},
    {img: "././assets/packaging1.png", text: 'text2'}
  ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
 
  constructor() { }

  ngOnInit() {
  }

}
