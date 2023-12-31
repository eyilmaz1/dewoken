import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SignedTicket = () => {
    const [isClicked, setIsClicked] = useState(false);

    const [transation, setTransaction] = useState(null);
    const [transationMode, setTransactionMode] = useState(false);
    const [publicKey, setPublicKey] = useState(null);

    const handleMouseDown = () => {
        setIsClicked(true);
    };

    const handleMouseUp = () => {
        setIsClicked(false);
    };

    const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/get-address');
          setPublicKey(response.data.public_key);
          setTransaction(
            <div style={{ border: '1px solid #2DC112', borderRadius: '5px', padding: '3px', textAlign: 'center', marginBottom: '3%' }}>
              {response.data.public_key}
            </div>
          );
          setTransactionMode(true);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        const intervalId = setInterval(async () => {
          try {
            if (publicKey) {
              const balanceResponse = await axios.get(`http://127.0.0.1:8000/get-balance/${publicKey}`);
              if (balanceResponse.data.msg === 'paid') {
                clearInterval(intervalId);
                setTransactionMode(false);
              }
            }
          } catch (error) {
            console.error('Error fetching balance:', error);
          }
        }, 15000);
    
        // Stop the periodic requests after 30 minutes (1800000 milliseconds)
        setTimeout(() => {
          clearInterval(intervalId);
          setTransactionMode(false);
        }, 120000);
    
        // Cleanup function to clear the interval when component is unmounted
        return () => clearInterval(intervalId);
      }, [publicKey]);
    
      const handleClick = () => {
        fetchData();
      };

    return (
        <div style={{paddingRight: '4%', paddingLeft: '4%', paddingBottom: '4%', paddingTop: '2%', flex: 1, backgroundColor: 'black'}}>
            <div style={{ border: '4px solid #2DC112', borderRadius: '10px', padding: '2%', marginBottom: '3%', color: "#2DC112", overflowWrap: 'break-word' }}>
                <h2>Cryptographically Signed Dewoken Ticket</h2>
                <p>Using Dewoken's PGP private key you will get a signed ticket with your information. This can be used to buy exclusive products released in the future!</p>
                <button
                    style={{
                        fontFamily: "'Courier New', Courier, monospace",
                        color: isClicked ? '#7DC112' : '#2DC112',
                        border: '1px solid #2DC112',
                        backgroundColor: 'transparent',
                        padding: '5px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        display: transationMode ? 'none' : 'block',
                        marginBottom: '3%'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onClick={handleClick}
                >0.01 ETH ◊</button>
                {transation}
            </div>
        </div>
    );
};

export default SignedTicket;