import React,{Component} from 'react';
import './App.css';

import Statistics from "./actions/controllers/controllerStatistics"


class App extends Component{
    render()
{
    return <div class="row general">
    <Statistics></Statistics>
</div>
}
}



export default App;
