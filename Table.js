class Table {

    constructor(err){

        this.header = err[0]
        err.shift()
        this.row = err

    }
   get RowCount(){ // Return lines

            return this.row.length


    }

    get ColunsCount(){
        
        return this.header.length
    }


}

module.exports = Table