import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({isMobile, setPostsMode}) => {
  return (
    <div id='mainposts' style={{paddingRight: '4%', paddingLeft: '4%', paddingBottom: '4%', flex: 1, backgroundColor: 'black'}}>
        <div style={{width: '100%', textAlign: 'right'}}>
            <input type="text" placeholder='Search'
                style={{
                    marginRight: '0.3%',
                    fontFamily: "'Courier New', Courier, monospace",
                    paddingBottom: '0.5%',
                    marginBottom: isMobile ? '2%' : '1%',
                    color: '#2DC112',
                    border: '1px solid #2DC112',
                    backgroundColor: 'transparent',
                    padding: '5px',
                    borderRadius: '5px',
                    outline: 'none',
                    width: '15%'
                }}
            />
        </div>
        <Link to='/insta-followers' style={{ textDecoration: 'none' }} onClick={() => setPostsMode(false)}>
            <div style={{ border: '4px solid #2DC112', borderRadius: '10px', padding: '2%', marginBottom: '3%' }}>
                <h3 style={{color: "#2DC112"}}>How to check who doesn't follow you back on Instagram</h3>
                <p style={{color: "#2DC112"}}>Notciced those follower apps not working anymore? Well that's because Meta disabled the Instagram Login API. Here I will give you a step by step guide on how to check who doesn't follow you back. No coding experience required. Simply copy paste.</p>
            </div>
        </Link>
        <Link to='/music-unveiled' style={{ textDecoration: 'none' }} onClick={() => setPostsMode(false)}>
            <div style={{ border: '4px solid #2DC112', borderRadius: '10px', padding: '2%', marginBottom: '3%' }}>
                <h3 style={{color: "#2DC112"}}>The truth about music unveiled</h3>
                <p style={{color: "#2DC112"}}>Music has a profound impact on us, influencing our thoughts and actions. While we chant along your brain gets subtly wired to do fucked up things.</p>
            </div>
        </Link>
    </div>
  );
};

export default Posts;
