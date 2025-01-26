const { default: Script } = require("next/script");


const AdsSense = ({ pID }) => {
    return(
        <Script
            async
            src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-'+ pID}
            crossOrigin = {"anonymous"}
            strategy="afterInteractive"
        >
            
        </Script>
    )
}
export default AdsSense