const fs = require('fs')
const fsPromise = require("fs/promises")
const myFileWriter = async (fileName, fileContent) => {
	try {
		const data = await fsPromise.writeFile("devender.txt", "Hello Devender GM", (data)=>{
			console.log(data)
		})
	}
	catch(err){
		console.log
	}
	

}
myFileWriter()

const myFileReader = async (fileName) => {
	try{
		const data=await fsPromise.readFile('./text.txt',{encoding:'utf8'})
	console.log(data)
	}
	catch(err){
		console.log("find err")
	}
}
myFileReader()


const myFileUpdater = async (fileName, fileContent) => {
try{
	const data=await fsPromise.appendFile('./text.txt','  this is my new updated',()=>{})
}
catch(err){
	console.log(" plz chech err")
}
}
myFileUpdater()

const myFileDeleter = async (fileName) => {
	try{
		const data= await fsPromise.unlink('devender.txt',()=>{})
	}
	catch(err){
		console.log(err)
	}
}
myFileDeleter()



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }