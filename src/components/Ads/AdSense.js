import Script from "next/script";

export default function AdSense(){
    return(
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1320242016578102`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        ></Script>
    )
}