import React,{Component} from 'react';
import './App.css';

import MainCtrl from "./actions/controllers/mainController"


class App extends Component{
   

    
    
    render()
{
    return <div class="row general">
    <MainCtrl></MainCtrl>
</div>
}
}



export default App;