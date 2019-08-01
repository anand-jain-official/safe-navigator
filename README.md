# safe-navigator

A safe navigation operator for javascript that allows you to access nested objects without throwing an error if you try to access the key of an undefined value. 

Install with `npm i safe-navigator`

## How does itwork ?
If you want to access **obj.key1.key2.key3**, you can import the package as safe and try **safe(obj, "key1.key2.key3")** and even if key1 does not contain a key called key2 and you try to access key3 in an undefined value of key2, the function will return the value of undefined without throwing an error.




Example: 
    
    const farm = { farmer: { name: 'Steve' } };
    console.log(farm.farmer.name); //will return 'Steve'
    console.log(farm.farmer.name.age.old); //will throw an error
    

## Now lets try it with safe

    const safe = require('safe-navigator');
    const farm = { farmer: { name: 'Steve' } };
    console.log(safe(farm, 'farmer.name.age.old')); // undefined.
    console.log(safe(farm, 'farmer.name')); // will return 'Steve'
