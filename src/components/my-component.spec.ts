import { sayHello } from './my-component';

describe('my component', (): void => {
  it('says hello', (): void => {
    expect.assertions(1);
    expect(sayHello('Person')).toStrictEqual('Hello there, Person!');
  });
});
