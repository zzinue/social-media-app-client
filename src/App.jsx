import React from 'react'
import {Route, Routes} from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import Feed from "./components/pages/Feed.jsx";
import Messages from "./components/pages/Messages.jsx";
import ChatBox from "./components/pages/ChatBox.jsx";
import Connections from "./components/pages/Connections.jsx";
import Discover from "./components/pages/Discover.jsx";
import Profile from "./components/pages/Profile.jsx";
import CreatePost from "./components/pages/CreatePost.jsx";
import {useUser} from "@clerk/clerk-react";
import Layout from "./components/pages/Layout.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {
const {user} = useUser();


    return (
        <>
            <Toaster/>
         <Routes>
             <Route path="/" element={!user? <Login />: <Layout />}  >
             <Route index element={<Feed />} />
             <Route path="/messages" element={<Messages />} />
             <Route path="/messages/:userId" element={<ChatBox />} />
             <Route path="/connections" element={<Connections />} />
             <Route path="discover" element={<Discover />} />
             <Route path="/profile" element={<Profile />} />
             <Route path="profile/:profileId" element={<Profile />} />
             <Route path='create-post'  element={<CreatePost />} />
                 <Route path='/layout' element={<Layout />} />
             </Route>
         </Routes>
        </>
    )
}
export default App
