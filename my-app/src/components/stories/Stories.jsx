import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Thiago Taujiro",
      img: "https://media.istockphoto.com/id/112156576/photo/construction-worker-having-coffee-break-on-construction-site.jpg?s=612x612&w=0&k=20&c=iY50HBpWWbW19gHyIrfQL8Hx4xzgJlc8Vsq5PbHrXBE=",
    },
    {
      id: 2,
      name: "Niahm Cornord",
      img: "https://as1.ftcdn.net/v2/jpg/05/30/23/80/1000_F_530238080_XYoMEF4qu607yqQ5RqzMaZKm4ntLvPXB.jpg",
    },
    {
      id: 3,
      name: "Anabelle Potter",
      img: "https://www.2aussietravellers.com/wp-content/uploads/2017/02/Umeda-sky-building-5.jpg",
    },
    {
      id: 4,
      name: "James Smith",
      img: "https://proest.com/wp-content/uploads/2021/11/construction-types-1024x493.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories