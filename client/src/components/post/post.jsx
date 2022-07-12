import './post.css';

export default function Post(){
  return (
    <div className='post'>
      <img className='postImg' src='https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg?cs=srgb&dl=pexels-pixabay-207589.jpg&fm=jpg' alt=''/>
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum</span>
        <br />
        <span className='postDate'>1 hour ago</span>
      </div> 
      <p className='postDescr'>
      kfsjhdsuferutreuhtiuerhteurhiuetrhuehruhuhrweuirhwefueiwhufwehuhfew
      fwefwfehweuifwufhwf
      efwehwef4erfnrejgbireugherugierugherugher
      kfsjhdsuferutreuhtiuerhteurhiuetrhuehruhuhrweuirhwefueiwhufwehuhfew
      fwefwfehweuifwufhwf
      efwehwef4erfnrejgbireugherugierugherugher
      kfsjhdsuferutreuhtiuerhteurhiuetrhuehruhuhrweuirhwefueiwhufwehuhfew
      fwefwfehweuifwufhwf
      efwehwef4erfnrejgbireugherugierugherugher
      </p>
    </div>
  )
}