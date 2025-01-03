const person = {
    name: 'John',
    lastName: 'Doe',
    age: 30,
    password: '1234'
}
const usecontext = ({ age, password }) => {
    return {
        username: password,
        newAge: age,
        coordinades: {
            lat: 40.7128,
            lng: -74.006
        }
    }
}

const { username, newAge, coordinades } = usecontext(person);
const { lat, lng } = coordinades;
// console.log(avenger);
console.log(username, newAge);
console.log(lat, lng);
