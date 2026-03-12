let books = [
 { id:1, title:"Node Basics", author:"John", year:2020 },
 { id:2, title:"Express Guide", author:"Mike", year:2022 },
 { id:3, title:"MongoDB Intro", author:"John", year:2021 }
];

exports.getBooks = (req,res)=>{

 let {author,year,page,limit} = req.query;

 let result = [...books];

 if(author){
  result = result.filter(b=>b.author === author);
 }

 if(year){
  result = result.filter(b=>b.year == year);
 }

 page = parseInt(page) || 1;
 limit = parseInt(limit) || result.length;

 let start = (page-1)*limit;
 let end = start + limit;

 res.json(result.slice(start,end));
};

exports.addBook = (req,res)=>{

 const newBook = {
  id: books.length + 1,
  title: req.body.title,
  author: req.body.author,
  year: req.body.year
 };

 books.push(newBook);

 res.json(newBook);
};

exports.searchBook = (req,res)=>{

 const title = req.query.title || "";

 const result = books.filter(b =>
  b.title.toLowerCase().includes(title.toLowerCase())
 );

 res.json(result);
};