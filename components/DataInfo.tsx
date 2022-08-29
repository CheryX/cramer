import React, { useEffect, useState } from "react"
import { hasCookie, setCookie } from "cookies-next"

export default function DataInfo() {
    
    const [visible, setVisible] = useState("visible")

    useEffect(() => {
        hasCookie('dont_show') ? setVisible("hidden") : setVisible("visible")
    })

    return (
        <>
            <div className={visible + " fixed bottom-4 w-full lg:left-1/4 lg:w-1/2 bg-slate-500/50 p-2 rounded-xl backdrop-blur flex align-center z-50"}>
                <button className="bg-teal-600 px-8 py-2 rounded-xl" onClick={() => {setVisible("hidden"); setCookie('dont_show', true, { maxAge: 60 * 60 * 24 * 60 })}}>OK</button>
                <p className="px-2">
                    Używamy plików cookie i przechowujemy dane na twoim urządzeniu w celach zapisywania twoich preferencji. Korzystając z tej strony zgadzasz się na to.
                </p>
            </div>
        </>
    )
}