import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { routing } from './app-routing';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StepsComponent } from './steps/steps.component';
import { SelectFingersComponent } from './select-fingers/select-fingers.component';
import { SelectChocolateComponent } from './select-chocolate/select-chocolate.component';
import { SelectIngredientsComponent } from './select-ingredients/select-ingredients.component';
import { CustomizePackagingComponent } from './customize-packaging/customize-packaging.component';
import { MessageComponent } from './message/message.component';

import { ReviewComponent } from './review/review.component';

import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StepsComponent,
    SelectFingersComponent,
    SelectChocolateComponent,
    SelectIngredientsComponent,
    CustomizePackagingComponent,
    MessageComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    OwlModule
  ],

  providers:  [{ provide: FormDataService, useClass: FormDataService },
              { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
