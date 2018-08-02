import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SelectFingersComponent } from './select-fingers/select-fingers.component';
import { SelectChocolateComponent } from './select-chocolate/select-chocolate.component';
import { SelectIngredientsComponent } from './select-ingredients/select-ingredients.component';
import { CustomizePackagingComponent } from './customize-packaging/customize-packaging.component';
import { MessageComponent } from './message/message.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  {path: 'select-fingers', component: SelectFingersComponent},
  {path: 'select-chocolate', component: SelectChocolateComponent},
  {path: 'select-ingredients', component: SelectIngredientsComponent},
  {path: 'cutomize-package', component: CustomizePackagingComponent},
  {path: 'message', component: MessageComponent},
  {path: 'review', component: ReviewComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);