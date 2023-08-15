/* 

The system under test here should meet the following requirements:

- Between 5 and 15 characters long

- Contains at least one digit

- Contains at least one upper case letter

- Return an object containing a boolean result and an errors key that — when 
provided with an invalid password — contains an error message or type for 
all errors in occurrence. There can be multiple errors at a single time.

*/
import { passwordValidator } from './index'

describe('password validator', () => {
    describe('length', () => {
        it('does not validate passwords fewer than 5 characters', () => {
            expect(passwordValidator('1huM')).toBe(false);
        });

        it('does not validate passwords longer than 15 characters', () => {
            expect(passwordValidator('thePhysical1234567')).toBe(false);
        })
    })
})

