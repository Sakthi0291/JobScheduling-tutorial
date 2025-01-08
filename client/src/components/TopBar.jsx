import React, { useCallback } from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom'

export default function TopBar() {
  const logout = useCallback(() => {
    window.catalyst.auth.signOut('/');
  }, []);

  return (
    <>
    <div className="topbarContainer">

        <div className="topbarLeft">
            <Link to="/addUserPage">
              <button className='naviagtion-btn'>Add user</button>
            </Link>

            <Link to="/ListUsers">
              <button className='naviagtion-btn'>List user</button>
            </Link>
        </div>

        <div className="topBarCenter">
            <div className="seacrhbar">
               <h1>Birthday Reminder</h1>
            </div>
        </div>
       
        <div className="topbarRight">
           <button className="topRight-btn" onClick={logout}>Sign-out</button>
        </div>
    </div>
    </>
  )
}
