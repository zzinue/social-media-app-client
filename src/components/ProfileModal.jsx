import React from 'react'
import {dummyUserData} from "../assets/assets.js";
import {Pencil} from "lucide-react";

const ProfileModal = ({setShowEdit}) => {
    const user=dummyUserData;
    const [editForm, setEditForm] = React.useState({
        username: user.username,
        bio: user.bio,
        location: user.location,
        profile_picture:null,
        cover_photo:null,
        full_name:user.full_name,

    });
    const handleSaveProfile = async (e) => {
        e.preventDefault();

    }
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-110 h-screen overflow-y-scroll bg-black/50">
            <div className="max-w-2xl sm:py-6 mx-auto">
                <div className="bg-white rounded-lg shadow p-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-6">Editar perfil</h1>
                    <form className="space-y-4" onSubmit={handleSaveProfile}>
                    {/*    profile picture*/}
                        <div className="flex flex-col items-start gap-3" >
                            <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-700 mb-1">
                                Imagen de Perfil
                                <input hidden type="file" accept="image/*"
                                id="profile_picture"
                                className="w-full p-3 border border-gray-200 rounded-lg" onChange={(e)=>setEditForm({...editForm, profile_picture: e.target.files[0]})}/>
                                <div className="group/profile relative">
                                    <img src={editForm.profile_picture? URL.createObjectURL(editForm.profile_picture): user.profile_picture} alt="" className="w-24 h-24 rounded-full object-cover mt-2"/>
                                    <div className="absolute hidden group-hover/profile:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-full items-center justify-center">
                                        <Pencil className="w-5 h-5 text-white"/>
                                    </div>

                                </div>
                            </label>
                        </div>
                    {/*    cover photo*/}
                        <div className="flex flex-col items-start gap-3">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cover_photo">
                                Cover photo
                                <input hidden  type="file" accept="image/*"
                                       id="cover_photo"
                                       className="w-full p-3 border border-gray-200 rounded-lg" onChange={(e)=>setEditForm({...editForm, cover_photo: e.target.files[0]})}/>
                                <div className="group/cover relative">
                                    <img src={editForm.cover_photo?URL.createObjectURL(editForm.cover_photo):user.cover_photo} className="w-80 h-40 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 object-cover mt-2" alt=""/>

                                    <div className="absolute hidden group-hover/cover:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-lg items-center justify-center">
                                        <Pencil className="w-5 h-5 text-white"/>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                nobmre
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg " placeholder="Introduce tu nombre"
                                onChange={(e)=>setEditForm({...editForm, full_name: e.target.value})} value={editForm.full_name}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                nombre de usuario
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg " placeholder="Introduce tu nombre de usuario"
                                       onChange={(e)=>setEditForm({...editForm, username: e.target.value})} value={editForm.username}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                bio
                                <textarea rows={3} className="w-full p-3 border border-gray-200 rounded-lg " placeholder="Introduce tu biografia"
                                       onChange={(e)=>setEditForm({...editForm, bio: e.target.value})} value={editForm.bio}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Ubicacion
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg " placeholder="Introduce tu ubicacion"
                                       onChange={(e)=>setEditForm({...editForm, location: e.target.value})} value={editForm.location}
                                />
                            </label>
                        </div>
                        <div className="flex justify-end space-x-3 pt-6">
                            <button type="button" onClick={()=>setShowEdit(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">Cancelar</button>
                            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition cursor-pointer">Guardar cambios</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProfileModal
