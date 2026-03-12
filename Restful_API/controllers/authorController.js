let authors = [
 {id:1, name:"John"},
 {id:2, name:"Mike"}
];

exports.getAuthors = (req,res)=>{
 res.json(authors);
};

exports.addAuthor = (req,res)=>{

 const newAuthor = {
  id: authors.length + 1,
  name: req.body.name
 };

 authors.push(newAuthor);

 res.json(newAuthor);
};

exports.updateAuthor = (req,res)=>{

 const id = parseInt(req.params.id);

 authors = authors.map(a=>{
  if(a.id === id){
   return {...a,...req.body};
  }
  return a;
 });

 res.json({message:"Author updated"});
};

exports.deleteAuthor = (req,res)=>{

 const id = parseInt(req.params.id);

 authors = authors.filter(a=>a.id !== id);

 res.json({message:"Author deleted"});
};