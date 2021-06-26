const Book = (props) => {

  const { img, title, author } = props.book;

  const hanleClick = () => {
  console.log("Ive been clicked")
}

  
  const complexExample = (author) =>{
    console.log(author)
  }

  return (
    <article className="book">
      <img src={img} />
      <h1> {title} </h1>
      <h3> {author} </h3>
      <button type='button' onClick={hanleClick}> Click Me </button>
      <button onClick={() => complexExample(author)}> More Complex Example </button>
    </article>
  )
}

export default Book;