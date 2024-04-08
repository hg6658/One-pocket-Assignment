const list = [1,2,3,4,5];

const sum = list.reduce(function (sum, item){
    return sum + item;
},0)


console.log(sum);