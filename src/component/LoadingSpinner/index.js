import React from 'react';
import Loader from 'react-loader-spinner'

 export default class App extends React.Component {
  //other logic
    render() {
     return(
        <div className="loader-container">
           <Loader type="Oval" color="#21BA45" height={80} width={80} />
        </div>
     );
    }
 }