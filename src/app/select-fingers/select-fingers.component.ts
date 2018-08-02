import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormDataService }     from '../data/formData.service';

@Component({
  selector: 'app-select-fingers',
  templateUrl: './select-fingers.component.html',
  styleUrls: ['./select-fingers.component.css']
})
export class SelectFingersComponent implements OnInit {

    title = 'What do you do?';
    fingerType: string;
    form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.fingerType = this.formDataService.getFinger();
      console.log('Work feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    this.formDataService.setFinger(this.fingerType);
    return true;
  }

    goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the address page
        this.router.navigate(['/select-chocolate']);
      }
    }

}
