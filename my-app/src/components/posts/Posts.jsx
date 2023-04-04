import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Thiago Taujiro",
      userId: 1,
      profilePic:
        "https://media.istockphoto.com/id/112156576/photo/construction-worker-having-coffee-break-on-construction-site.jpg?s=612x612&w=0&k=20&c=iY50HBpWWbW19gHyIrfQL8Hx4xzgJlc8Vsq5PbHrXBE=",
      desc: "Today's view",
      img: "https://media.istockphoto.com/id/527909878/photo/tower-crane-at-construction-site-of-skyscraper-copy-space.jpg?s=612x612&w=0&k=20&c=j5p-GH4pb6bQthtd9Hx31ITpI0s8jLO4j21vERXbFaM=",
    },
    {
      id: 2,
      name: "Thiago Taujiro",
      userId: 2,
      profilePic:
        "https://media.istockphoto.com/id/112156576/photo/construction-worker-having-coffee-break-on-construction-site.jpg?s=612x612&w=0&k=20&c=iY50HBpWWbW19gHyIrfQL8Hx4xzgJlc8Vsq5PbHrXBE=",
      desc: "My boss is looking for Traffic Controller if someone is free or know someone who want to get a shift, please let me know...",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;