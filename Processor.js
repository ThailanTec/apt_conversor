class Processor {

        static Process(data) {
        let a = data.split("\r\n")
        let rows = []

        a.forEach(row => {
          let err =  row.split(",")
          rows.push(err)
        });

        return rows
    }

}





module.exports = Processor;