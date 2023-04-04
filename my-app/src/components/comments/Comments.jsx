import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Oh wow! I loved the picture!",
      name: "Jo Batkin",
      userId: 1,
      profilePicture:
        "https://media.licdn.com/dms/image/D5603AQFqKvuZjKQc_Q/profile-displayphoto-shrink_800_800/0/1675644048381?e=2147483647&v=beta&t=rKO3cEn04hjPtLj8IE6gUoXZoG7fOLVUbroLRy0In5w",
    },
    {
      id: 2,
      desc: "Beautiful view!",
      name: "Ian Ormesher",
      userId: 2,
      profilePicture:
        "https://ca.slack-edge.com/TGRSX7L6L-U048HT05R2M-e1a50cb51e8a-512",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;