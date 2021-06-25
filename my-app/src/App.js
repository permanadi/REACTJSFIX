import React,{useState} from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Judul from "./Judul"
import Satu from "./routes/Satu"
import Dua from "./routes/Dua"


const App = ()=>{
  

  return(
    <Router>
       <Switch>
         <Route path="/" exact component={Judul} />
         <Route path="/satu" exact component={Satu} />
         <Route path="/dua" exact component={Dua} />
       </Switch>
    </Router>
  )
}
export default App