import main from '../src/main';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('main function', () => {
    it('should return hello world', () => {
      const result = main();
      expect(result).to.equal('Hello World!');
    });
  });
