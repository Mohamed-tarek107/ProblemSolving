const students = ["mohamed","ahmed","amr","sayed","name"];
const numbers = [1,2,3,4,5,6,7]


function findstudent(students,studentName){
    let found = false;
    // o(n) time complexity
    for(let i = 0; i < students.length; i++){
        if(students[i] === studentName){
            console.log(students[i])
            found = true;
            break;
        }else{
            console.log("not found")
        }

    //this adds another n to the worst case -> O(2n)
    for(let j = 0; j < students.length; j++){
        if(students[j] === "ahmed"){
            console.log(students[j])
            break;
        }else{
            console.log("not found")
        }
    }
    }
}

// O(1)
const best = (arr,index) => {
    return arr[index];
}

//O(n^2) grows quadratically with the size of input khaly balak
function findpairs(arr){

    // O(n^2) = dominant term
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            console.log(`pairs: ${arr[i]}, ${arr[j]}`)
        }
    }

    // O(n) = Non dominant term
    for(let q =0; q < arr.length; q++){
        console.log("----", q)
    }
}

const numbers2 = [2,3,4,5,6,8]


// O(n^2 + n)  so we remove the non dominant term to get only n
findpairs(numbers2);

console.log(best(numbers, 2))
// o(n) time complexity
findstudent(students,"mohamed");