const fs = require("fs")
const util = require("util")


class Writer{

    constructor(){
        this.writer = util.promisify(fs.writeFile)

    }


   async writer(filename, date){

    try {
        await  this.writer(filename, date)
        return true
    } catch (error) {
        return false
        
    }

     
    }
}

module.exports = Writer