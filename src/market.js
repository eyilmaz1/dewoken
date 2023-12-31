import React from 'react';
import { Link } from 'react-router-dom';

const Market = ({isMobile, setPostsMode}) => {
  return (
    <div id='mainmarket' style={{paddingRight: '4%', paddingLeft: '4%', paddingBottom: '4%', flex: 1, backgroundColor: 'black'}}>
        <div style={{width: '100%', textAlign: 'right'}}>
            <input
                type="text" placeholder='Search'
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
        <Link to='/market/signed-ticket' style={{ textDecoration: 'none' }} onClick={() => setPostsMode(true)}>
            <div style={{ border: '4px solid #2DC112', borderRadius: '10px', padding: '2%', marginBottom: '3%' }}>
                <h3 style={{color: "#2DC112"}}>Cryptographically Signed Dewoken Ticket</h3>
                <p style={{color: "#2DC112"}}>Using Dewoken's PGP private key you will get a signed ticket with your information. This can be used to buy exclusive products released in the future!</p>
                <p style={{color: "#2DC112", "fontSize": '12px'}}>0.01 ETH ◊</p>
            </div>
        </Link>
        <Link to='/market/belt' style={{ textDecoration: 'none' }} onClick={() => setPostsMode(true)}>
            <div style={{ border: '4px solid #2DC112', borderRadius: '10px', padding: '2%', marginBottom: '3%' }}>
                <h3 style={{color: "#2DC112"}}>Platinum Dewoken Belt</h3>
                <p style={{color: "#2DC112"}}>Sexy 99.99% platinum Dewoken buckle and real crocodile skin. Currently in design proccess. There will only be a handful available to purchase.</p>
                <p style={{color: "#2DC112", "fontSize": '12px'}}>Coming soon...</p>
            </div>
        </Link>
    </div>
  );
};

export default Market;
