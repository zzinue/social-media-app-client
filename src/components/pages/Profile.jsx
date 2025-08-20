import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {dummyPostsData, dummyUserData} from "../../assets/assets.js";
import Loading from "../Loading.jsx";
import UserProfileInfo from "../UserProfileInfo.jsx";

const Profile = () => {

    const {profileId} = useParams()
    const [user, setUser] = useState(null)

    const [posts, setPosts] = useState([])
    const [activeTab, setActiveTab] = useState('posts');
    const [showEdit, setShowEdit] = useState(false);

    const fetchUser = async () => {
        setUser(dummyUserData)
        setPosts(dummyPostsData)

    }
    useEffect(() => {
        fetchUser()
    }, []);

    return user ? (
        <div className="relative h-full overflow-y-scroll bg-gray-50 p-6">
            <div className="max-w-3xl">
                {/*profile card*/}
                <div className="bg-white rounded-2xl shadow overflow-hidden">
                    {/*    cover photo*/}
                    <div className="h-40 md:h-56 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
                        {user.cover_photo &&
                            <img src={user.cover_photo} alt="" className="w-full h-full object-cover"/>}
                    </div>
                    {/*    user info*/}
                    <UserProfileInfo user={user} posts={posts} profileId={profileId} setShowEdit={setShowEdit}/>
                </div>
            </div>
        </div>
    ) : (<Loading/>)
}
export default Profile
