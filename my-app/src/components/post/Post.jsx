import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" 
                    src="/assets/person/1.jpeg" alt=""/>
                    <span className="postUsername">Ulan Mamont</span>
                    <span className="postDate">5 min(s) ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post</span>
                <img className="postImg" src="assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtonLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" />
                    <img className="heartIcon" src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">11 people like it</span>
                </div>
                <div className="postButtonRight">
                    <span className="postCommentText">10 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
