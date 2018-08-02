import { Injectable }                        from '@angular/core';

import { FormData, Personal, Address }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isFingerFormValid: boolean = false;
    private isChocolateFormValid: boolean = false;
    private isIngredientFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) {
    }

    getFinger() : string {
        // Return the work type
        return this.formData.finger;
    }

    setFinger(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isFingerFormValid = true;
        this.formData.finger = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.finger);
    }
    getChocolate() : string {
        // Return the work type
        return this.formData.chocolate;
    }

    setChocolate(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isChocolateFormValid = true;
        this.formData.chocolate = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.chocolate);
    }
    getIngredient() : string {
        // Return the work type
        return this.formData.ingredient;
    }

    setIngredient(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isIngredientFormValid = true;
        this.formData.ingredient = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.ingredient);
    }
    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        //this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isFingerFormValid && this.isChocolateFormValid && this.isIngredientFormValid;
    }
}
