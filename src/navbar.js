import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isMobile, postsMode, setPostsMode }) => {
  return (
    <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', paddingTop: isMobile ? '2%' : '1%' }}>
            <Link to={postsMode ? "/market" : "/"} onClick={() => setPostsMode(!postsMode)}>
                <img src="/delog.jpg" alt="dewoken" style={{ width: '80px', height: 'auto' }}/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
