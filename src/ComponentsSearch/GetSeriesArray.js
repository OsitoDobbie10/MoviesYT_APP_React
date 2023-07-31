import CallContext from "../CustomHooks/CallContext";
import searcTVseries from "../API/searchTvseries";
import { useCallback, useRef } from "react";

const GetSeriesArray = ({search})=>{
    const {searchtv,setSearchtv,searchtv2,setSearchtv2} = CallContext();
    const previousSearch2 = useRef(search);
    const getSeries = useCallback(async({search})=>{
        if (search === previousSearch2.current) return
        try {
            previousSearch2.current = search;
            const newarray = await searcTVseries({search});
            searcTVseries(newarray);
           } catch (error) {
            console.log(error);
        }
    },[])

    return {getSeries}

}

export default GetSeriesArray;