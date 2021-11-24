import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import '../style/sidebar.css'
import ExploreIcon from '@material-ui/icons/Explore';
import Subscribe from '@material-ui/icons/Subscriptions';
import Library from '@material-ui/icons/LibraryAdd';
import History from '@material-ui/icons/History';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div id="box" className="box1"><HomeIcon/> <p>Home</p></div>
            <div id="box" className="box2"><ExploreIcon/><p>Explore</p> </div>
            <div id="box" className="box3"><Subscribe/><p>Subscription</p> </div>
            <div id="box" className="box4"><Library/><p>Library</p> </div>
            <div id="box" className="box5"><History/><p>History</p> </div>
        </div>
    )
}

export default Sidebar
