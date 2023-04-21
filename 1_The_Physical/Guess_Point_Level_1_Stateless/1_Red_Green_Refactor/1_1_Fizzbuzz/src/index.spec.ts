import { fizzbuzz } from './fizzbuzz';

describe("fizzbuzz", () => {
    it('takes a positive number', () => {
        const num = 3;
    
        expect(fizzbuzz(num)).toEqual(num);
    })

});


