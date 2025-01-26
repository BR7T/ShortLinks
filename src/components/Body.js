"use client"

import { useEffect } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

export default function Body(){
    return(
        <main className="h-[100vh] bg-[#EAF1FF] py-10 p-7  flex gap-8 justify-between">
            <aside className="w-2/3 flex flex-col gap-6">
                <div className=" bg-white w-full p-[32px] rounded-xl shadow-lg ">
                    <div>
                        <h1 className="text-2xl font-semibold mb-6 text-indigo-900">Shorten your link</h1>
                    </div>
                    <div className="flex gap-3">
                        <input type="text"  className="h-10 border-2 rounded-lg focus:outline-2 focus:outline-indigo-900 px-3 py-2 w-full"/>
                        <input type="button" value={"Shorten"} className="px-3 py-2 bg-indigo-800 text-white font-semibold mb-6 cursor-pointer rounded hover:bg-indigo-900 transition"/>
                    </div>
                </div>

                <article className="flex gap-8">

                    <div className="bg-white w-full p-[32px] rounded-xl shadow-lg ">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-indigo-900">Your link</h3>
                        </div>
                        <div className="flex gap-3 text-[20px] px-4 py-2 bg-indigo-200 rounded-lg w-max items-center">
                            <p className="italic text-indigo-400">Your link will appear here...</p>
                            <button className="p-2 bg-indigo-300 hover:bg-indigo-400 transition rounded-lg"><MdOutlineContentCopy  className="text-indigo-900"/></button>
                        </div>
                    </div>

                    <div className="w-2/3 h-full bg-white shadow-lg rounded-2xl flex items-center justify-center">
                    
                         
                    </div>
                </article>


                <div className="bg-white w-full p-[32px] rounded-xl shadow-lg ">
                    ad2
                </div>
            </aside>


            <aside className="w-[20rem]">
                <div className="StatsArea bg-white px-12 py-6 lg:sticky top-4 rounded-lg h-[20rem]">
                    <h3 className="text-[26px] font-semibold text-indigo-900">Quick Stats</h3>
                    <div className="font-semibold text-indigo-900 text-[15px]">
                        <h1>Total Links Shortened</h1>
                        <p className="bg-indigo-100 rounded-lg px-3 py-1">XXXXX</p>
                    </div>
                    <div className="font-semibold text-indigo-900 text-[15px]">
                        <h4>Total Clicks</h4>
                        <p className="bg-indigo-100 rounded-lg px-3 py-1">XXXXX</p>
                    </div>
                    <div className="bg-white shadow-lg p-12 rounded-2xl flex items-center justify-center">

                        <Ad/>
                    </div>

                </div>
            </aside>
            
        </main>
    )
}

function Ad(){
    useEffect(() => {
        // Inicializar os anúncios
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }, []);   
    return(
        <>
            <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXX"
            data-ad-slot="XXXXXX"
            data-ad-format="auto"
            />
        </>
    )
}