import "./topbar.css";
import {Link} from "react-router-dom";

export default function Topbar(){
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
        <a href="https://www.youtube.com"><i className="topIcon fa-brands fa-facebook"></i></a> 
        <a href="https://www.youtube.com"><i className="topIcon fa-brands fa-instagram-square"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/blog_redu">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
            {user && 'LOGOUT'}
            {/* <Link className="link" to="/">LOGOUT</Link> */}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (<Link  className="link" to="/settings"><img className="topImg" src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/></Link>) 
          : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}