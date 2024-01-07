import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import PlanScreen from './PlanScreen'

function ProfileScreen() {

    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />

            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <PlanScreen/>

                            <button onClick={() => {
                                auth.signOut()
                                /*this goes into app.js and triggers the listener onAuthStateChanged and because there 
                                is no user it will go into the else block and dispatches logout as user is null */
                            }}
                                className='profileScreen_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
