import './setings.css';
import Sidebar from '../../components/sidebar/sidebar.jsx';

export default function Settings() {
  return(
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img src='https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?cs=srgb&dl=pexels-tranmautritam-251225.jpg&fm=jpg' alt='' />
            <label htmlFor='fileInput'>
              <i class="settingsIcon fa-solid fa-circle-user"></i>
            </label>
            <input type='file' id='fileInput' style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder='Bianca'/>
          <label>Email</label>
          <input type="text" placeholder='cb@gmail.'/>
          <label>Password</label>
          <input type="password"/>
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>  
      <Sidebar />
    </div>
  )
}