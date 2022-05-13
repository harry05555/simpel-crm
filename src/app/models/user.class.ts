export class User {

    private _firstName!: string;
    private _lastName!: string;
    private _street!: string;
    private _birthDate!: Date;
    private _zipCode!: string;
    private _city!: string;

    constructor(obj?: any) {

    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    public get street(): string {
        return this._street;
    }

    public set street(value: string) {
        this._street = value;
    }

    public get birthDate(): Date {
        return this._birthDate;
    }

    public set birthDate(value: Date) {
        this._birthDate = value;
    }

    public get zipCode(): string {
        return this._zipCode;
    }

    public set zipCode(value: string) {
        this._zipCode = value;
    }

    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

    toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            zipCode: this.zipCode,
            city: this.city,
        }
    }
}