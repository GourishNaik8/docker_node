const data =  [
    {"id": 1, "available": true, "str":"true"},
    {"id": 2, "available": false, "str":"false"},
    {"id": 3, "available": true, "str":"true"},
    {"id": 4, "available": false, "str":"false"},
    {"id": 5, "available": true, "str":"true"},
    {"id": 6, "available": false, "str":"false"},
    {"id": 7, "available": true, "str":"true"},
    {"id": 8, "available": false, "str":"false"},
    {"id": 9, "available": true, "str":"true"},
    {"id": 10, "available": false, "str":"false"},
    {"id": 11, "available": true, "str":"true"},
    {"id": 12, "available": false, "str":"false"},
    {"id": 13, "available": true, "str":"true"},
    {"id": 14, "available": false, "str":"false"},
    {"id": 15, "available": true, "str":"true"},
    {"id": 16, "available": false, "str":"false"},
    {"id": 17, "available": true, "str":"true"},
    {"id": 18, "available": false, "str":"false"},
    {"id": 19, "available": true, "str":"true"},
    {"id": 20, "available": false, "str":"false"},
]

// sort the data like all false are at last 

function sortBy(data,option) {
  switch(option){ 
        case 'bool':
              // sort based on boolean value
              return data.sort((a, b) => b.available - a.available);
              break;
       case 'str':
              // sort based on the string compare
              return data.sort((a,b) => a.str === 'true' ? -1 : b.str === 'true'? 1 : 0)
              break;
       case 'random':
              // shuffle data randomly
              return data.sort(() => Math.random() - .3) // .3 is the value the differs/ randomizes the data
              break;
        // if not option is available then default data is returned.
        default:
              return data
  }
}

const res = sortBy(data) // you can pass the option as a string in the function.
console.log(res);
