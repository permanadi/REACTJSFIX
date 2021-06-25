import React,{useState} from "react"
import Nama from "./Nama"
import { Link } from 'react-router-dom'



const Judul = ()=>{
  

  return(
    <div>
    <Nama title="arif"/>
    <Nama title="shohib"/>
    <Nama title="jaka"/>

    <Link to='/satu'>Satu</Link><br />
    <Link to='/dua'>Dua</Link><br /><br />

    <a href="./route/Satu.js">ini pake tag A</a>
    </div>
  )
}
export default Judul