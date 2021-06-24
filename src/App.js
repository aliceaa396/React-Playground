import React from 'react';
import './App.css';

const books = [
  {
    title: "Subtle Art of Not Giving a F*ck",
    author:"Mark Manson",
    img:'https://target.scene7.com/is/image/Target/GUEST_c865ca97-33c0-47e0-9a13-a329592f9694?wid=488&hei=488&fmt=pjpeg'
  },
  {
    title:"Cant Hurt Me",
    author:"David Goggins",
    img:"https://i5.walmartimages.com/asr/32b661c9-2d5b-495f-8110-642ca98f9ff6.eaa7f93e3615ce2b3b220073dcbf6f9a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
  }
] 


function App() {
  return (
    <div className="App">
      {books.map((book)=> {
        //here you can return the values you would like
         return (
          <Book 
            book={book}
          />
         )
      })}
    </div>
  );
}

const Book = (props) => {
  //You can also destructure Props so you dont need to write props.name
  //OR you can pass in the values below as an object instead of props => const book =({img, title, author})
  const { img, title, author } = props.book;
  return (
    <article>
      <img src={img} />
      <h1> {title} </h1>
      <h3> {author} </h3>   
    </article>
  )
}


export default App;
