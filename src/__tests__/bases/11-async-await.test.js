import { describe, it, expect } from "vitest";
import { getGiphy } from "../../bases/11-async-await";

describe('Test in 11-async-await', () => {
    it('getGiphy should return a url', async () => {
        const url = await getGiphy()
        console.log('url', url);
        expect(url).toContain('https://')
    })
})