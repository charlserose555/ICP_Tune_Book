import React, { useEffect, useRef, useState } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "../../store";
import { AuthClient } from "@dfinity/auth-client";
import loading from "../../utils/Loading.js";

function Login() {
  let authClient = null;

  const handleLogin = async () => {
    try {          
        loading();

        const authClient = await AuthClient.create();
        const identity = authClient.getIdentity();
        
        console.log("principal", identity.getPrincipal().toText());
        
        // let signResult = await signIn(identity.getPrincipal().toText());
        // alert("success", "The login successful!");
        
        // let profileInfo = signResult.user;

        // if(!profileInfo) {
        //     let userInfo = {
        //         principal: identity.getPrincipal().toText(),
        //         displayname: "",
        //         username: "",
        //         avatar: "",
        //         isInitialized: false,
        //         fileType: "jpeg",
        //         role: isAdmin(identity.getPrincipal().toText())? 'admin' : 'user',
        //         createdAt : Number(Date.now() * 1000)
        //     }
                
        //     dispatch(Login({userInfo : userInfo}));
        //     alert("info", "Please create the profile");
        //     dispatch(ShowModal("editProfile"))
        // } else {
        //     let userInfo = {
        //         principal: identity.getPrincipal().toText(),
        //         role: isAdmin(identity.getPrincipal().toText())? 'admin' : 'user',
        //         displayname: profileInfo.displayname,
        //         username: profileInfo.username,
        //         avatar: `${BASE_URL}/` + profileInfo.avatar,
        //         isInitialized: true,
        //         fileType: "jpeg",
        //         createdAt: Number(profileInfo.createdAt)
        //     }

        //     console.log("userInfo", userInfo)

        //     dispatch(Login({userInfo : userInfo}));
        // }

        loading(false);
    } catch (err) {
        alert("danger", "Failure on log in");
        loading(false);
    }
}

const loginNFID = async() => {
    authClient = await AuthClient.create();
    if (!authClient) throw new Error("AuthClient not initialized");
    
    const APP_NAME = `${process.env.REACT_APP_SIGNIN_MESSAGE}`;
    const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
    const CONFIG_QUERY = `?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;
    
    const identityProvider = `https://nfid.one/authenticate${CONFIG_QUERY}`;

    authClient.login({
        identityProvider,
        derivationOrigin: "https://4ramb-vaaaa-aaaan-qmi2a-cai.ic0.app",
        onSuccess: () => handleLogin(),
        windowOpenerFeatures: `
        left=${window.screen.width / 2 - 525 / 2},
        top=${window.screen.height / 2 - 705 / 2},
        toolbar=0,location=0,menubar=0,width=525,height=705
        `,
    });
}

const loginICP = async() => {
    authClient = await AuthClient.create();

    if (!authClient) throw new Error("AuthClient not initialized");        

    await new Promise((resolve) => {
        authClient.login({
            identityProvider: "https://identity.ic0.app",
            maxTimeToLive: 24 * 3_600_000_000_000,
            onSuccess: resolve,
        });
    });

    handleLogin();
}


  return (
    <>
      <div className="flex flex-row py-8 font-plus px-10 relative w-full gap-8 text-darkblue-800 h-full">
        <div className="w-full h-full bg-white rounded-4 flex flex-col gap-4 p-8">
            <p className="font-bold">Log In</p>
            <input className="py-2 pl-4 px-4 rounded-2 w-full font-normal focus:border-transparent focus:outline-none" placeholder="Username"  style={{
                border: '1.5px solid #e5e7eb', // Set the border color to blue
                height: '42px', // Adjust the font size as needed
            }}/>

            <input className="py-2 pl-4 px-4 rounded-2 w-full font-normal focus:border-transparent focus:outline-none" placeholder="Password" style={{
                border: '1.5px solid #e5e7eb', // Set the border color to blue
                height: '42px', // Adjust the font size as needed
            }}/>

            <a className="fill-btn-secondary text-12 px-4 py-2 text-white font-medium bg-green-450 rounded-8 w-full flex flex-row justify-center gap-45 items-center"
                style={{textAlign: 'center', cursor: 'pointer'}}>
                <p className='text-white font-medium'> Log In</p>
            </a>

            <div className="flex flex-row justify-between items-center gap-8 w-full px-4 py-2 z-30">
              <a className="outline-btn text-14 px-4 py-2 font-medium rounded-8 w-full" 
                  style={{border: '2px solid #34A853', textAlign: 'center', cursor: 'pointer'}}
                  onClick={(() => loginICP())}>
                  
                  <div className="flex justify-center text-green-450 font-bold items-center gap-[8px]">
                      <p>IC Identity</p>                    
                      <img className="" style={{width: "24px", height: "24px"}} src="/demo/assets/icp-logo.png"/>
                  </div>
              </a>
              <a className="outline-btn text-14 px-4 py-2 font-medium rounded-8 w-full" 
                  style={{border: '2px solid #34A853', textAlign: 'center', cursor: 'pointer'}}
                  onClick={(() => loginNFID())}>
                  
                  <div className="flex justify-center text-green-450 font-bold items-center gap-[8px]">
                      <p>NFID</p>     
                      <img className="rounded-md" style={{width: "24px", height: "24px"}} src="/demo/assets/nfid-logo.png"/>
                  </div>
              </a>
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-4 flex flex-col gap-4 p-8">
          <p className="font-plus-bold text-24">Most Popular Tunes of Month</p>
          <div className="flex flex-row w-full justify-start items-center gap-4">
            <img className="rounded-8 w-16 h-16" 
              style={{
                  border: '3px solid #faca15' // Adjust the font size as needed
              }}
             src="/demo/assets/camera.png"/>
            <p className="font-plus-bold text-20">Tune Title 1</p>
          </div>
          <div className="flex flex-row w-full justify-start items-center gap-4">
            <img className="rounded-8 w-16 h-16" src="/demo/assets/camera.png"
              style={{
                border: '3px solid #faca15' // Adjust the font size as needed
              }}/>
            <p className="font-plus-bold text-20">Tune Title 2</p>
          </div>
          <div className="flex flex-row w-full justify-start items-center gap-4">
            <img className="rounded-8 w-16 h-16" src="/demo/assets/camera.png"
              style={{
                border: '3px solid #faca15' // Adjust the font size as needed
              }}/>
            <p className="font-plus-bold text-20">Tune Title 3</p>
          </div>
          <div className="flex flex-row w-full justify-start items-center gap-4">
            <img className="rounded-8 w-16 h-16" src="/demo/assets/camera.png"
              style={{
                border: '3px solid #faca15' // Adjust the font size as needed
              }}/>
            <p className="font-plus-bold text-20">Tune Title 4</p>
          </div>
          <p className="font-plus-bold text-20">Sessons Near You</p>
        </div>
      </div>
    </>
  );
}

export default Login;
