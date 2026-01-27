const fs=require("fs");
const path=require("path");
const inputFilePath=path.join(__dirname,"input.txt");
const transformFilePath=path.join(__dirname,"transform.txt");
const readStream= fs.createReadStream(inputFilePath);
const writeStream=fs.createWriteStream(transformFilePath);

const upperCaseTransform= new Transform({
 transform(chunk,encoding,callback){
  const transformedData=chunk.toString().toUpperCase();
  this.push(transformedData)
  callback()
 }
})

readStream.pipe(upperCaseTransform).pipe(writeStream);
