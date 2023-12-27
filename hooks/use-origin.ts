import { useEffect, useState } from "react"

export const UseOrign = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(()=> {
        setMounted(true);
    },[]);

    const origin = typeof Window !== "undefined" && window.location.origin ? window.location.origin : "" 

    if (!mounted){
        return "";

    }

    return origin;
}

