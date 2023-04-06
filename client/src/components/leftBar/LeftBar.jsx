import "./leftBar.scss";
// import Friends from "../../assets/1.png";
// import Groups from "../../assets/2.png";
// import Market from "../../assets/3.png";
// import Watch from "../../assets/4.png";
// import Memories from "../../assets/5.png";
// import Events from "../../assets/6.png";
// import Gaming from "../../assets/7.png";
// import Gallery from "../../assets/8.png";
// import Videos from "../../assets/9.png";
// import Messages from "../../assets/10.png";
// import Tutorials from "../../assets/11.png";
// import Courses from "../../assets/12.png";
// import Fund from "../../assets/13.png";

import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import MessageIcon from '@mui/icons-material/Message';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GroupIcon from '@mui/icons-material/Group';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';

import { blue, pink, red, grey, blueGrey, cyan} from '@mui/material/colors';


import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={"/upload/" +currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <GroupIcon  sx={{ fontSize: 30, color: blue[600]}}/>
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity3Icon  sx={{ fontSize: 30, color: cyan[500]}}/>
            <span>Groups</span>
          </div>
          <div className="item">
            {/* <img src={Market} alt="" /> */}
            <HistoryToggleOffIcon sx={{ fontSize: 30 }}/>
            <span>Stories</span>
          </div>
          <div className="item">
            <MessageIcon color = "secondary" sx={{ fontSize: 30 }}/>
            <span>Messages</span>
          </div>
          <div className="item">
            <SwitchVideoIcon color = "success" sx={{ fontSize: 30 }}/>
            <span>Videos</span>
          </div>
          
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <FavoriteIcon  sx={{ fontSize: 30, color: red[600]}}/>
            <span>Favorites</span>
          </div>
          <div className="item">
            <BookmarksIcon  sx={{ fontSize: 30, color: grey[600]}}/>
            <span>Saved</span>
          </div>
          <div className="item">
            <CloudUploadIcon  sx={{ fontSize: 30, color: blueGrey[500]}}/>
            <span>Upload</span>
          </div>
          <div className="item">
            <ShareIcon  sx={{ fontSize: 30, color: grey[900]}}/>
            <span>Share</span>
          </div>
          <div className="item">
            <SettingsIcon  sx={{ fontSize: 30, color: grey[700]}}/>
            <span>Settings</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <FacebookIcon  sx={{ fontSize: 30, color: blue[900]}}/>
            <span>Facebook</span>
          </div>
          <div className="item">
            <InstagramIcon  sx={{ fontSize: 30, color: pink[500]}}/>
            <span>Instagram</span>
          </div>
          <div className="item">
            <TwitterIcon  sx={{ fontSize: 30, color: blue[500]}}/>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
