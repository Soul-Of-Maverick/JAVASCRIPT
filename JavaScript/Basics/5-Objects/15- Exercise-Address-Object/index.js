//Address Object

// street
// city
// zipcode
// showAddress(address)

const address = {
    street: 'aa',
    city: 'mys',
    zipCode: 572001,
};

function showAddress(address) {
    for ( let key in address)
        console.log(key, address[key]);
}

showAddress(address);