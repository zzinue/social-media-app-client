import React from 'react'
import {dummyConnectionsData, dummyPendingConnectionsData} from "../../assets/assets.js";
import {Search} from "lucide-react";
import UserCard from "../UserCard.jsx";
import Loading from "../Loading.jsx";

const Discover = () => {
    const [input,setInput] = React.useState('')
    const [users,setUsers] = React.useState(dummyConnectionsData)
    const [loading, setLoading] = React.useState(false)

    const handleSearch = async (e) => {
        if(e.key === 'Enter') {
            setUsers([])
            setLoading(true)
            setTimeout(()=>{
                setUsers(dummyConnectionsData)
                setLoading(false)
            },1000)
        }
    }
    console.log(users)

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto p-6">
                {/*title*/}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Descubre más amigos</h1>
                    <p className="text-slate-600">Conecta con grandes personalidades</p>
                </div>
            {/*    search */}
                <div className="mb-8 shadow-md rounded-md border border-slate-200/60 bg-white/80">
                    <div className="p-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transition -translate-y-1/2 text-slate-400 w-5 h-5"/>
                            <input type="text" placeholder="Buscar gente por nombre, usuario , bio o localizacion" className="pl-10 sm:pl-12 py-2 w-full border border-gray-300 rounded-md max-sm:text-sm" onChange={(e)=>setInput(e.target.value)} value={input} onKeyUp={handleSearch}/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-6">

                    {users.map((user) => (<UserCard  key={user._id} user={user}  />))}

                </div>
                {loading &&(<Loading height="60vh"/>)}
            </div>
        </div>
    )
}
export default Discover
