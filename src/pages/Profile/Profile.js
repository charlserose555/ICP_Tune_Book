import React, { useEffect, useRef, useState, memo, Suspense } from "react";

import FavouriteTrack from "./FavouriteTrack";
import ReleasedTrack from "./MyTracks";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { dispatch, useDispatch, useSelector } from "../../store";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import PageLoader from "../../components/Loader/PageLoader";
import library from "../../routes/profile";
import ProfileBanner from "./ProfileBanner";

function Library() {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('');
  const {user} = useSelector((state) => (state.auth));
  const { isLoggedIn } = useSelector(
    (state) => state.auth
  );

  return (
    <>
      <div className="flex flex-row py-8 font-plus px-10 relative w-full gap-8 text-darkblue-800 h-full">
        <div className="w-full h-full bg-white rounded-4 flex flex-row py-8 px-16">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full flex flex-row justify-start items-center gap-6">
                <img className="rounded-[120px] w-40 h-40" src="/demo/assets/artist_profile.png"
                  style={{
                    border: '3px solid #faca15'
                  }}/>
                  <div className="flex flex-col justify-start items-start">
                    <p className="font-plus-bold text-24">John O'Connor</p>
                    <p className="font-plus text-16 font-bold">Dublin, Ireland</p>
                    <p className="font-plus text-16 font-bold">Instruments: Fiddle, Tin Whistle</p>
                  </div>
              </div>
              <div className="w-full flex flex-row gap-4">
                <a className="fill-btn-secondary text-12 w-36 px-4 py-2 text-white font-medium bg-green-450 rounded-8 flex flex-row justify-center gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-bold'> Friends List</p>
                </a>
                <a className="fill-btn-secondary text-12 w-36 px-4 py-2 text-white font-medium bg-green-450 rounded-8 flex flex-row justify-center gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-bold'> Tunebook</p>
                </a>
              </div>
            </div>
            <div className="w-full h-full rounded-4 flex flex-col gap-4 p-8">
              <p className="font-plus-bold text-24">Newly Added Tunes by Friends</p>
              <div className="flex flex-row w-full justify-start items-center gap-4">                
                <p className="font-plus font-bold text-20">Sean just added 'The Mooncoin Jig' to their tunebook</p>
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-4">                
                <p className="font-plus font-bold text-20">Maeve just added 'The Rights of Man' to their tunebook</p>
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-4">                
                <p className="font-plus font-bold text-20">Liam just added 'The Banshee' to their tunebook</p>
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-4">                
                <p className="font-plus font-bold text-20">Sean just added 'The Mooncoin Jig' to their tunebook</p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Library;
