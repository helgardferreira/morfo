import { name, internet, address } from "faker";

export class Person {
  firstName: string;
  lastName: string;
  name: string;
  title: string;
  city: string;
  email: string;

  constructor() {
    this.firstName = name.firstName();
    this.lastName = name.lastName();
    this.name = `${this.firstName} ${this.lastName}`;
    this.title = name.jobTitle();
    this.city = address.city();
    this.email = internet.email(this.firstName, this.lastName);
  }
}

export default function generatePeople(count: number): Person[] {
  const people: Person[] = [];

  for (let i = 0; i < count; i++) {
    people.push(new Person());
  }

  return people;
}
