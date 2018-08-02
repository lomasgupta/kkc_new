export class FormData {
    finger: string = '';
    chocolate: string = '';
    ingredient: any = {};
    message: string = '';
    clear() {
        this.finger = '';
        this.chocolate = '';
        this.ingredient = '';
        this.message = '';
    }
}

export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}
