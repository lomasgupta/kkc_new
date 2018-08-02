import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-select-chocolate',
  templateUrl: './select-chocolate.component.html',
  styleUrls: ['./select-chocolate.component.scss']
})
export class SelectChocolateComponent implements OnInit {
  title = 'What do you do?';
  chocolateType: string;
  form: any;
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.chocolateType = this.formDataService.getChocolate();
      console.log('Work feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    this.formDataService.setChocolate(this.chocolateType);
    return true;
  }

    goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the address page
        this.router.navigate(['/select-ingredients']);
      }
    }
}
