import { expect } from "vitest";
import { it } from "vitest";
import { describe } from "vitest";

describe('Pruebas en <DemoComponent/>', () => {
    it('First test with strings', () => {
        const message1 = 'Hello World';
        const message2 = message1.trim();
        expect(message1).toBe(message2);
    })
}) 