export class FormData {
    finger: string = '';
    chocolate: string = '';
    ingredient: string = '';
    clear() {
        this.finger = '';
        this.chocolate = '';
        this.ingredient = '';
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
