import { describe, it} from "vitest";
import { greeting } from "../../bases/02-template-strings";
import { expect } from "vitest";
const fullName = 'Jesus Monge';

describe('Pruebas en 02-template-strings ', () => {
    it(`greeting should return Hello ${fullName}`, () => {
        const message = greeting(fullName)
        expect( message ).toBe(`Hello ${fullName}`) 
    })
});