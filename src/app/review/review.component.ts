import { Component, OnInit , Input  } from '@angular/core';
import { FormDataService } from '../data/formData.service';
import { Router }              from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
      private formData;
      data;
  constructor(private formDataService: FormDataService, private router: Router) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
  }

}
