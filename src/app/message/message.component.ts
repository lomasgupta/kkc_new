import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormDataService }     from '../data/formData.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

    title = 'What do you do?';
    messageType: string;
    form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.messageType = this.formDataService.getMessage();
      console.log('Message feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    this.formDataService.setMessage(this.messageType);
    return true;
  }

    goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the address page
        this.router.navigate(['/review']);
      }
    }

}
