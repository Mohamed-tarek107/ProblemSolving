// make custom array

    class Myarray{
        constructor(){
            this.length = 0;
            this.data = {};
        }
        //adds to array
        push(str){
            this.data[this.length] = str
            this.length++;
            return this.length;
        }

        //gets value from specific index
        get(num){
            if(num > -1){
                console.log(this.data[num])
            }
        }

        // remove last index from array
        pop(){
            let last = this.data [this.length - 1];
            delete this.data[this.length - 1];
            this.length--;
            return last;
        }

        shift(){
            let start = this.data[0]
            delete this.data[0];
            for(let i = 0; i < this.length; i++){
                this.data[i] = this.data[i + 1]
            }
            delete this.data[this.length - 1]
            this.length--;
            return start;
        }

        deletebyindex(index){
            let selected = this.data[index];
            for(let i = index; i < this.length; i++){
                this.data[i] = this.data[i + 1]
            }
            delete this.data[this.length - 1]
            this.length--;
            return selected;
        }

        insertAt(index, value){
            this.length++;
            for(let i = this.length - 1; i > index; i--){
                this.data[i] = this.data[i - 1] 
            }
            this.data[index] = value;
        }
    }

    //  array: [1,2,3,4]
    //  index: [0,1,2,3]

    //  after: [1,2,3]

    const mynewarray = new Myarray();  
    mynewarray.push("Mango")
    mynewarray.push("Apple")
    mynewarray.push("Banana")
    mynewarray.push("Berry")


    // console.log(mynewarray.get(2))
    mynewarray.pop()

    // console.log("after pop", mynewarray)

    mynewarray.shift()
    mynewarray.shift()

    mynewarray.deletebyindex(1)
    mynewarray.insertAt(2, "Grapes")
    // console.log("after :", mynewarray)



    // // string challenge reverse:
    const reverse = (str) => {
        let reversed = "";

        for(let i = str.length - 1; i >= 0; i--){
            reversed += str[i]
        }
        return reversed;
    }

    // console.log(reverse("Tarek"))



    // //string capitalize first char in words challenge
    const capitalized = (str) => {
        return str
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join("")
    }

    // console.log(capitalized("my name is cat"))



    // fizzbuzz
    const fizzbuzz = (n) => {
        for(let i = 1; i <= n;i++){
            if(i % 3 && i % 5){
                console.log("FizzBuzz");
            }else if(i % 3){
                console.log("Fizz");
            }else if(i % 5){
                console.log("Buzz");
            }else{
                console.log(i);
            }
        }
    }

    // console.log(fizzbuzz(30))



    //array chunks
    const chunked = (arr, chunks) => {
        let chunkedarr = []
        let index = 0;
    
        while(index < arr.length){
            const chunks = arr.slice(index, index + chunks)

            chunkedarr.push(chunks);
            index += chunks
        }

        return chunkedarr;
    }


    //Two sums(ugly code)
    const twosums = (nums, target) => {
        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return [i,j]
                }
            }
        }
        return [];
    }
