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

}