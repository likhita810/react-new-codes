import React from "react";
import { useParams } from "react-router-dom";
import DashbrdCls from "./DashbrdCls";

function Dashbrd(){
    const params=useParams()
    return(
        <>
            {/* {console.log(params)} */}
            <DashbrdCls data={params}></DashbrdCls>
        </>
    )
}
export default Dashbrd