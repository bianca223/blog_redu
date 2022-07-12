import "./header.css";

export default function Header(){
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Reduvational</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?cs=srgb&dl=pexels-picjumbocom-196655.jpg&fm=jpg" alt="" />
    </div>
  );
}