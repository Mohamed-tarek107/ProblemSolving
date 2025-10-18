class Hashtable {
    constructor(size = 5){
        this.keymap = new Array(size)
    }

    _hashFunction(key){
        let sum = 0;

        const primenumber = 31;

        for(let i = 0; i< Math.min(key.length, 100);i++){
            const charCode = key.charCodeAt(0) - 96;

            sum = (sum * primenumber + charCode) % this.keymap.length
        }

        return sum;
    }
    set(key,value){
        const index = this._hashFunction(key)

        if(!this.keymap[index]) this.keymap[index] = []

        this.keymap[index].push([key,value]);
        return this;
    }

    get(key){
        const index = this._hashFunction(key)
        
        if(this.keymap[index]){
            for(let i = 0; i < this.keymap[index].length; i++){
                if(this.keymap[index][i][0] == key){
                    return this.keymap[index][i][1]
                }
            }
        }

        return undefined;
    }

    getallkeys(){
        const keys = []

        for(let i = 0; i < this.keymap.length; i++){
            if(this.keymap[i]){
                for(let j = 0; j < this.keymap[i].length; J++){
                    keys.push(this.keymap[i][j][0])
                }
            }
        }

        return keys;
    }


    getallvalues(){
        const values = [];


        for(let i = 0; i < this.keymap.length; i++){
            if(this.keymap[i]){
                for(let j = 0; j < this.keymap[i].length; J++){
                    values.push(this.keymap[i][j][1])
                }
            }
        }
        return values;
    }
}

//leetcode

function wordcounter(text){
    
    const lowertext = text.toLowerCase();
    

    const wordMap = {}

    const words = lowertext.split(' ')


    for(const word of words){
        if(word in wordMap){
            wordMap[word]++;
        }else{
            wordMap[word] = 1;
        }
    }

    return wordMap;
}
