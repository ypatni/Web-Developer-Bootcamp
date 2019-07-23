console.log("Print Reverse");
function reverse( array){
    for (var i=array.length -1; i>=0; i--){
        console.log(array[i]);
    }
}
reverse([4,6,8,9]);


console.log("Check if Uniform");

function isUniform(array){
    var first = array[0];
    for(var i =1; i<array.length; i++){
        if(array[i] !== first){
            return false;
        }
    }
    return true;
}


console.log("Sum of Array");
function sumArray(array){
    var total = 0;
    arr.forEach(function(element){
        total+= element;
    });
    return total;
}
console.log("Max of Array");

function max(array){
    var max = array[0];
    for (var i =1; i< array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}



