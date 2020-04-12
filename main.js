const Reader = require("./Reader")
const Processor =  require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")
const pdfWriter = require("./PDFWrite")



let leitor = new Reader();
let escritor =  new Writer();

async function main(){

   let dados = await leitor.Read("./user.csv")

   let dadosprocess =  Processor.Process(dados)

    let usuario = new Table(dadosprocess)

    let html = await HtmlParser.Parse(usuario)

    escritor.writer( Date.now() + ".html",html )

    pdfWriter.writepdf(Date.now() + ".pdf", html)
}


main()

