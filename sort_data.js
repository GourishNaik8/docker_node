const data =  [
    {"id": 1, "available": true},
    {"id": 2, "available": false},
    {"id": 3, "available": true},
    {"id": 4, "available": false},
    {"id": 5, "available": true},
    {"id": 6, "available": false},
    {"id": 7, "available": true},
    {"id": 8, "available": false},
    {"id": 9, "available": true},
    {"id": 10, "available": false},
    {"id": 11, "available": true},
    {"id": 12, "available": false},
    {"id": 13, "available": true},
    {"id": 14, "available": false},
    {"id": 15, "available": true},
    {"id": 16, "available": false},
    {"id": 17, "available": true},
    {"id": 18, "available": false},
    {"id": 19, "available": true},
    {"id": 20, "available": false},
]

// sort the data like all false are at last 

function sortByAvaliblity(data) {
 return data.sort((a, b) => b.available - a.available);
}

console.log(sortByAvaliblity(data));
