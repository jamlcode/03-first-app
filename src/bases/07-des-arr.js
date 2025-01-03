
const value = 'ABC';
const returnArray = () => [value, 1234];
const useuser = (value) => {
    return [ value, () => { console.log('Hola Mundo') } ]
}

export { returnArray, useuser, value}