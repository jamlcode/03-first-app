import { expect } from "vitest";
import { it } from "vitest";
import { describe } from "vitest";
import { getActiveUser, getUser, username } from "../../bases/05-functions";

const testUser = {
    uid: 'ABC123',
    username 
}

describe("Pruebas en 05-functions", () => {
    it("getUser shoud return an object", () => {
        const user = getUser()
        console.log(user);
        if (user) {
            expect(user).toEqual(testUser)
        }
    })

    it("getActiveUser shoud return an object", () => {
        const user = getActiveUser(username)
        console.log(user);
        if (user) {
            expect(user.username).toBe(username)
        }
    })
})