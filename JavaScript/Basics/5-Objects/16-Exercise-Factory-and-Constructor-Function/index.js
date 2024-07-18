//Exercise- Factory and Constructor Function

const address = createAddress('aa', 'bb', 'cc');

console.log(address);

// Factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    };
}

// Constructor function
const address1 = new CreateAddress('aa', 'bb', 'cc');

console.log(address1); 

function CreateAddress(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
};