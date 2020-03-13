# safe-navigator

A safe navigation operator for javascript that allows you to access nested objects without throwing an error if you try to access the key of an undefined value. 

Install with `npm i safe-navigator`

## How does it work ?
If you want to access **obj.key1.key2.key3**, you can import the package as safe and try **safe(obj, "key1.key2.key3")** and even if key1 does not contain a key called key2 and you try to access key3 in an undefined value of key2, the function will return the value of undefined without throwing an error. If you pass a third argument to **safe(obj, "key1.key2.key3", [])**, incase the value is undefined, the fallback will be returned by safe.

If you don't pass a second parameter to the function, the object passed as first parameter will be returned.

If you dont return any parameters, the function will return undefined.

#Updates
v1.1.0 : Added support for accessing array in a nested javascript object.
v1.1.1 : Added a fallback as third argument to safe function

## Example: 
    
    const farm = { farmer: { name: 'Steve' } };
    console.log(farm.farmer.name); //will return 'Steve'
    console.log(farm.farmer.name.age.old); //will throw an error
    

## Now lets try it with safe

    const safe = require('safe-navigator');
    const farm = { farmer: { name: 'Steve' } };
    console.log(safe(farm, 'farmer.name.age.old')); // undefined.
    console.log(safe(farm, 'farmer.name')); // will return 'Steve'

    Update v1.1.1: Fallback
    console.log(safe(farm, 'farmer.name.age.old', "fallback")); // will return 'fallback'.

    Update v1.1.0: Arrays inside nested Objects

    const farm = { 
        farmer: { 
            name: 'Steve', 
            farmAnimals: ['Horse', 'Cow'], 
            animalDetails: [ {horse: { name: 'john'} }, { cow: { name: 'sam' } }],
            pairs: [['john','michelle'], ['sam','edna']]
            } 
        };

        console.log(safe(farm, 'farmer.farmAnimals[0]')); // will return 'Horse'
        console.log(safe(farm, 'farmer.animalDetails[0].horse.name')); // will return 'john';
        
        Note: 2D or multi-dmensional arrays are not natively supported in the string passed to safe.

        To work with multi-dimensional arrays, use [] after the safe fn returns the parent array.
        console.log(safe(farm, 'farmer.pairs[0]')[1]); // returns 'michelle'
