import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/D5603AQFqKvuZjKQc_Q/profile-displayphoto-shrink_800_800/0/1675644048381?e=2147483647&v=beta&t=rKO3cEn04hjPtLj8IE6gUoXZoG7fOLVUbroLRy0In5w"
                alt=""
              />
              <span>Jo Batkin</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ca.slack-edge.com/TGRSX7L6L-U048HT05R2M-e1a50cb51e8a-512"
                alt=""
              />
              <span>Ian Ormesher</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/id/112156576/photo/construction-worker-having-coffee-break-on-construction-site.jpg?s=612x612&w=0&k=20&c=iY50HBpWWbW19gHyIrfQL8Hx4xzgJlc8Vsq5PbHrXBE="
                alt=""
              />
              <p>
                <span>Thiago Taujiro</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQFl8iim9-AHlQ/profile-displayphoto-shrink_800_800/0/1636442402736?e=2147483647&v=beta&t=Oy6c9mrAOSbjrZtJreV0YPSYaSe9JDE8X27pt2lxVG4"
                alt=""
              />
              <p>
                <span>Sam Moore</span> changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.licdn.com/dms/image/C5603AQFl8iim9-AHlQ/profile-displayphoto-shrink_800_800/0/1636442402736?e=2147483647&v=beta&t=Oy6c9mrAOSbjrZtJreV0YPSYaSe9JDE8X27pt2lxVG4"
                alt=""
              />
              <div className="online" />
              <span>Sam Moore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;