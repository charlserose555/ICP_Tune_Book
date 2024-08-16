import React, { useEffect, useRef, useState, memo, Suspense } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { dispatch, useDispatch, useSelector } from "../../store";
import { AvatarInput } from "../../components/DragDrop/AvatarInput";
import loading from "../../utils/Loading";
import { idlFactory } from '../../smart-contracts/backend.js';
import { HttpAgent, Actor } from '@dfinity/agent';
import alert from "../../utils/Alert.js";
import { UpdateInfo, SetTitle, SetOrgTunes, SetCurrentTune } from '../../store/reducers/auth.js';
import ABCJS from "abcjs";
import 'abcjs/abcjs-audio.css';
import ReactPaginate from 'react-paginate';

function MyTunes() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => (state.auth));
    const [orgTunes, setOrgTunes] = useState([]);
    const [currentTuneData, setCurrentTuneData] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const synth = new ABCJS.synth.CreateSynth();
    const synthControl = new ABCJS.synth.SynthController();
    const perPage = 15;

    useEffect(() => {
        dispatch(SetTitle('Browse Tunes'));

        getOrgTunes();
    }, [])

    const handlePageChange = (data) => {
        // console.log(data.selected);
        setCurrentPage(data.selected);
    };

    const getOrgTunes = async () => {
        const agent = new HttpAgent({ host: 'https://ic0.app' });
        const actor = Actor.createActor(idlFactory, { agent,  canisterId: process.env.REACT_APP_CANISTER_ID });

        let res = await actor.get_user_tune_list(user.principal, currentPage);

        console.log("res", res);

        setTotalPage(res[1]);

        let tunes = res[0].map((tune) => {return {name: tune.split('.abc')[0]}});
        dispatch(SetOrgTunes(tunes));
        setOrgTunes(tunes);

        console.log(tunes);

        synthControl.load("#player", null, {
            displayRestart: true,
            displayPlay: true,
            displayProgress: true,
            displayWarp: true
        });

    }

    useEffect(() => {
        iniABCJS(currentTuneData);
    }, [currentTuneData])

    useEffect(() => {
        getOrgTunes();
    }, [currentPage]);

    const iniABCJS = async (currentTuneData) => {
        const visualObj = ABCJS.renderAbc("tunedata", currentTuneData,  { responsive: "resize" });

        await synth.init({ visualObj: visualObj[0] });
        await synthControl.setTune(visualObj[0], false, {});
    }

    const onSelectTune = async (selectedTune) => {
        if(!selectedTune) return;
        console.log("selectTune", selectedTune)

        const agent = new HttpAgent({ host: 'https://ic0.app' });
        const actor = Actor.createActor(idlFactory, { agent,  canisterId: process.env.REACT_APP_CANISTER_ID });

        const tuneData = await actor.get_user_tune(user.principal,`${selectedTune.name}.abc`);
        setCurrentTuneData(tuneData);

        dispatch(SetCurrentTune({ origin: true, title: selectedTune.name, data: tuneData}));
        const visualObj = ABCJS.renderAbc("tunedata", tuneData,  { responsive: "resize" });
    }

    return (
    <>
      <div className="flex flex-row py-8 font-plus px-10 relative w-full gap-8 text-darkblue-800 h-full">
        <div className="w-full h-full flex flex-row py-8 px-2 md:px-4 lg:px-16 gap-16">                 
            <div className="w-full h-full flex flex-col gap-4 overflow-y-auto">
                {orgTunes.length == 0 && (
                    <div className="flex rounded-4 bg-white px-4 py-8 flex-row w-full justify-center items-center gap-4 cursor-pointer">  
                               
                        <p className="font-plus-bold font-bold text-16">No Data</p>
                    </div>
                )}

                {orgTunes.map((tune, index) => (
                    <div className="flex rounded-4 bg-white px-4 py-2 flex-row w-full justify-start items-center gap-4 cursor-pointer" key={index} onClick={() => {onSelectTune(tune)}}>  
                        <img className="rounded-8 w-12 h-12" src="/demo/assets/camera.png"
                            style={{
                                border: '3px solid #faca15' // Adjust the font size as needed
                        }}/>              
                        <p className="font-plus-bold font-bold text-16">{tune.name}</p>
                    </div>
                ))}

<div className="w-full flex flex-col md:flex-row">
                {totalPage > perPage ? ( <div style={{alignItems: "center", justifyContent:"end"}} >
                    <ReactPaginate
                    className="inline-flex text-sm h-8 mt-6"
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    nextLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight
                    border rounded-e-lg bg-primary border-white text-white hover:bg-white hover:text-green-450"
                    previousLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight
                        border rounded-s-lg bg-primary border-white text-white hover:bg-white hover:text-green-450"
                    breakLabel={"..."}
                    selectedPageRel={1}
                    breakClassName=""
                    breakLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight
                    border bg-primary border-white text-white hover:bg-white hover:text-green-450"
                    pageCount={Math.ceil(totalPage / perPage)}
                    pageLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight
                    border bg-primary border-white text-white hover:bg-white hover:text-green-450"
                    pageClassName="text-black"
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeLinkClassName="flex items-center justify-center h-8 border border-white hover:bg-blue-100 hover:text-green-450 border-white bg-white text-black"
                    />
                </div>) : ("")}
                </div>
            </div>

            {orgTunes.length > 0 && (
                <div className="w-full h-full bg-white rounded-4 flex flex-col gap-4 p-8">
                    <div class="flex w-full items-center px-3 gap-3">
                        <div id="player" class="flex-grow"></div>
                        <a className="fill-btn-secondary text-11 px-4 py-1 text-white font-medium bg-green-450 rounded-2 cursor-pointer flex flex-row justify-center gap-45 items-center"
                            style={{textAlign: 'center'}} onClick={() => {history.push("/app/playground")}}>
                            <p className='text-white font-medium'>Edit</p>
                        </a>
                    </div>
                    <div className="flex w-full flex-col y-scrollable-tag overflow-y-auto">
                        <div id="tunedata" className="text-gray-800 flex-grow"></div>
                    </div>
                </div>
            )}

        </div>
      </div>
    </>
  );
}

export default MyTunes;
