const express = require('express')
const app = express()


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


const uniqid = require('uniqid');
const books = require('./books')


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // send the HTML file
    console.log(id)
})


app.get('/books', (req, res) => {
    res.send(books)
})

app.post('/books', (req, res) => {
    const id = uniqid();
    const newBooks = {
        id,
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
    }
    books.push(newBooks);
    res.send(newBooks)
});



// app.delete('/books/:id', (req, res) => {
//     const id = req.params.id; // get the unique id parameter from the request path
//   // Find the item in the array with the specified unique id
//   const itemIndex = books.findIndex(books => books.id === id);
  
//   if (itemIndex === -1) {
//     // If the item is not found, return a 404 status
//     return res.status(404).send('Item not found');
//   } else {
//     // Remove the item from the array
//     items.splice(itemIndex, 1);
//     return res.send('Item deleted');
//   }
//  })



const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})