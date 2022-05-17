import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Feed</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Chat</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <SlowMotionVideoIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Videos</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Groups</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <BookmarkIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <QuestionMarkIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Questions</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Jobs</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Events</span>
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <SchoolIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/3.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/4.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/5.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/6.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/7.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/8.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/9.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/person/10.jpeg" alt="" />
              <span className="sidebarFriendName">Ulan</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
