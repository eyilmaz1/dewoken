import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navbar'; 

import Posts from './posts';
import InstaFollowers from './posts/insta_followers'
import MusicUnveiled from './posts/music_unveiled'

import Market from './market';
import SignedTicket from './market/signed_ticket'
import Belt from './market/belt'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [postsMode, setPostsMode] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Router>
          <NavBar isMobile={isMobile} postsMode={postsMode} setPostsMode={setPostsMode}/>
          <Routes>
            <Route path="/" element={<Posts isMobile={isMobile} setPostsMode={setPostsMode}/>} />
            <Route path="/insta-followers" element={<InstaFollowers/>} />
            <Route path="/music-unveiled" element={<MusicUnveiled/>} />
            <Route path="/market" element={<Market isMobile={isMobile} setPostsMode={setPostsMode}/>} />
            <Route path="/market/signed-ticket" element={<SignedTicket/>} />
            <Route path="/market/belt" element={<Belt/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

