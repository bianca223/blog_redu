import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarItemTitle'>ABOUT ME</span>
        <img src='https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?cs=srgb&dl=pexels-eduardo-dutra-2115217.jpg&fm=jpg' alt=''/>
        <p>Lorem ipsum ydgsidfsudfsiudfyfdhshfdushfsd dshufsdfhshsdfhuhhuhuh dfhsdhfiusdhfsd Lorem ipsum ydgsidfsudfsiudfyfdhshfdushfsd dshufsdfhshsdfhuhhuhuh dfhsdhfiusdhfsd Lorem ipsum ydgsidfsudfsiudfyfdhshfdushfsd dshufsdfhshsdfhuhhuhuh dfhsdhfiusdhfsd Lorem ipsum ydgsidfsudfsiudfyfdhshfdushfsd dshufsdfhshsdfhuhhuhuh dfhsdhfiusdhfsd</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarItemTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Mor</li>
          <li className='sidebarListItem'>Saracie</li>
          <li className='sidebarListItem'>Banii</li>
          <li className='sidebarListItem'>CacaMaca</li>
          <li className='sidebarListItem'>VreauAcasa</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarItemTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}