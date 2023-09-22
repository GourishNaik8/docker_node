const data = [
      {
            "id": 1,
            "available": true,
            "str": "true",
            "stk-status": "in-stock"
      },
      {
            "id": 2,
            "available": false,
            "str": "false",
            "stk-status": "out-of-stock"
      },
      {
            "id": 3,
            "available": true,
            "str": "true",
            "stk-status": "in-stock"
      },
      {
            "id": 4,
            "available": false,
            "str": "false",
            "stk-status": "out-of-stock"
      },
      {
            "id": 5,
            "available": true,
            "str": "true",
            "stk-status": "in-stock"
      },
      {
            "id": 6,
            "available": false,
            "str": "false",
            "stk-status": "out-of-stock"
      },
      {
            "id": 7,
            "available": true,
            "str": "true",
            "stk-status": "in-stock"
      },
      {
            "id": 8,
            "available": false,
            "str": "false",
            "stk-status": "out-of-stock"
      },
      {
            "id": 9,
            "available": true,
            "str": "true",
            "stk-status": "in-stock"
      },
      {
            "id": 10,
            "available": false,
            "str": "false",
            "stk-status": "out-of-stock"
      },
      {
            "id": 11,
            "available": true,
            "str": "true",
            "stk-status": "in-stock"
      }

]

// sort the data like all false are at last 

function sortBy(data, option) {
      switch (option) {
            case 'bool':
                  // sort based on boolean value
                  return data.sort((a, b) => b.available - a.available);
            case 'str':
                  // sort based on the string compare
                  return data.sort((a, b) => a.str === 'true' ? -1 : b.str === 'true' ? 1 : 0)
            case 'locale':
                  // this sort will give data perfect sorted order like 1st available in 1st position and 2nd available in 2nd position... based on the locale boolean as str values
                  return data.sort((a, b) => a.str.localeCompare(b.str));
            case 'random':
                  // shuffle data randomly
                  return data.sort(() => Math.random() - .3) // .3 is the value the differs/ randomizes the data
            case 'ase':
                  // this sort will give data perfect sorted order like 1st available in 1st position and 2nd available in 2nd position ... 
                  return data.sort((a, b) => (a.str === 'in-stk' && b.str !== 'in-stk') ? -1 : (a.str !== 'in-stk' && b.str === 'in-stk') ? 1 : 0);
            // if not option is available then default data is returned.
            default:
                  return data
      }
}

const res = sortBy(data, 'ase') // you can pass the option as a string in the function.
console.log(res);
