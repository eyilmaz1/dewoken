import React from 'react';

const InstaFollowers = () => {
  return (
    <div style={{paddingRight: '4%', paddingLeft: '4%', paddingBottom: '4%', paddingTop: '2%', flex: 1, backgroundColor: 'black'}}>
        <div style={{ border: '4px solid #2DC112', borderRadius: '10px', padding: '2%', marginBottom: '3%', color: "#2DC112" }}>
            <h2>How to check who doesn't follow you back on Instagram</h2>
            <p>In this example we will use the Chrome Browser. (PS: This may not work if you have a ridiculously large follower/following count)</p>
            <p>Step 1: Go to your profile page and inspect element (View → Developer → Inspect Elements) or (command + alt + i)</p>
            <p>Step 2: Click on your followers and load all the users by scrolling all the way to the bottom.</p>
            <p>Step 3: Enter this in the console and it will output your follower count: <b>let elements = document.getElementsByClassName(' _ap3a _aaco _aacw _aacx _aad7 _aade'); let follower = Array.from(elements).map(el =&gt; el.innerText); console.log(follower.length);</b></p>
            <div style={{ margin: '0 auto', textAlign: 'left', maxWidth: '50%' }}><img style={{ width: '100%', height: 'auto' }} src="/insta_followers.png" alt="console pic" /></div>
            <p>If the output gives back 0 then the class name '_ap3a _aaco _aacw _aacx _aad7 _aade' changed after this writing. If so, just replace it. Get the new one by going to the elements tab, clicking on the button I circled in yellow, then clicking any usrename. The part I underlined in green is what we are interested in.</p>
            <div style={{ margin: '0 auto', textAlign: 'left', maxWidth: '70%' }}><img style={{ width: '100%', height: 'auto' }} src="/insta_followers2.png" alt="console pic 2" /></div>
            <p>Step 4: Go to your following and scroll all the way to the bottom like last time and paste this in the console: <b>let elementx = document.getElementsByClassName(' _ap3a _aaco _aacw _aacx _aad7 _aade'); let following = Array.from(elementx).map(el =&gt; el.innerText); console.log(following.length); const extrafollowing = following.filter(item =&gt; !follower.includes(item)); console.log("Not Following Me Back v"); for ( i = 0; i &lt; extrafollowing.length; i++) {'{'} console.log(extrafollowing[i]) {'}'}; const notfollowback = follower.filter(item =&gt; !following.includes(item)); console.log("Not Following Them Back v");for ( i = 0; i &lt; notfollowback.length; i++) {'{'} console.log(notfollowback[i]) {'}'};</b></p>
            <p>Once you press enter you should be able to see all those motherfuckers not following you back! (and you'll also see who you ain't following back)</p>
        </div>
    </div>
  );
};

export default InstaFollowers;
