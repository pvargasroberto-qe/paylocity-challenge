import { faker } from '@faker-js/faker';

export type EmployeeInput = {
  firstName: string;
  lastName: string;
  dependants: number; 
};

export function makeEmployee(overrides: Partial<EmployeeInput> = {}): EmployeeInput {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dependants: faker.number.int({ min: 0, max: 32 }),
  };
}