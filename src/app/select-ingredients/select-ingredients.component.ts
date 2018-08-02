import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormDataService }     from '../data/formData.service';
@Component({
  selector: 'app-select-ingredients',
  templateUrl: './select-ingredients.component.html',
  styleUrls: ['./select-ingredients.component.scss']
})
export class SelectIngredientsComponent implements OnInit {
  title = 'What do you do?';
  ingredientType: any;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.ingredientType = this.formDataService.getIngredient();
      console.log('Work feature loaded!');
  }
   options = ["test", "test1", "test2"]
  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    this.formDataService.setIngredient(this.ingredientType);
    return true;
  }

    goToNext(form: any) {
      if (this.save(form)) {
        // Navigate to the address page
        this.router.navigate(['/message']);
      }
    }

}
