// const strArr = ['a','b','c','d']

// const numArr = [1,2,3,4,5,6]

// const bolArr = [true,false]

// const mix = ['a','tarek',1,true,{b: "b"}]



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
    // mynewarray.pop()

    // console.log("after pop", mynewarray)

    // mynewarray.shift()
    // mynewarray.shift()

    // mynewarray.deletebyindex(1)
    mynewarray.insertAt(2, "Grapes")
    console.log("after :", mynewarray)
    


    // string challenge reverse:
    const reverse = (str) => {
        let reversed = "";

        for(let i = str.length - 1; i >= 0; i--){
            reversed += str[i]
        }
        return reversed;
    }

    console.log(reverse("Tarek"))