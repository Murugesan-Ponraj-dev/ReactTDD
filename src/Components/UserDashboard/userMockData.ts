import { IUser } from './userInterfaces';

// ESM
import { faker } from '@faker-js/faker';


 function createRandomUser(): IUser {
  return {
     id: faker.number.int(),
    name: faker.internet.userName(),
    role: faker.internet.domainName(),
    description: faker.string.alpha()   
  };
}

 const GernatedUsers: IUser[] = faker.helpers.multiple(createRandomUser, {
  count: 5
});

export const mockUsers : IUser[] = GernatedUsers;
