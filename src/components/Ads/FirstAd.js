"use client"
import { useEffect } from "react"

export default function FirstAdd(){
    useEffect(()=>{
        try{
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        }catch(err){
            console.log(err.message)
        }
    } , [])
    
    return(
        <ins className="adsbygoogle"
        style={{display:"block" , background:"red"}}
     data-ad-client="ca-pub-1320242016578102"
     data-ad-slot="1444064326"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
    
    )
}