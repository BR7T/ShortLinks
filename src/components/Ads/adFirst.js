"use client"

import { useEffect } from "react"

export default function AdBanner(){
    useEffect(()=>{
        try{
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        }catch(err){
            console.log(err)
        }
    },[])
    return(
        <div>
            <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-client="ca-pub-1320242016578102"
            data-ad-slot="1444064326"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
    )
}