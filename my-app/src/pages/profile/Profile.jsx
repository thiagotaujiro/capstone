import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import EngineeringIcon from '@mui/icons-material/Engineering';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.agcs.allianz.com/news-and-insights/expert-risk-articles/construction-claims-trends/_jcr_content/root/stage/stageimage.img.82.3360.jpeg/1666955393504/agcs-grd-autumn-winter-2022-construction-claims-trends-stage.jpeg"
          alt=""
          className="cover"
        />
        <img
          src="https://media.istockphoto.com/id/112156576/photo/construction-worker-having-coffee-break-on-construction-site.jpg?s=612x612&w=0&k=20&c=iY50HBpWWbW19gHyIrfQL8Hx4xzgJlc8Vsq5PbHrXBE="
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Thiago Taujiro</span>
            <div className="info">
              <div className="item">
              <div className="item">
                <EngineeringIcon />
                <span>Traffic Controller & Labour</span>
              </div>
              <PlaceIcon />
                <span>Sydney,AU</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;