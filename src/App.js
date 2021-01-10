import React from 'react';
import Calculator1 from './components/Calculator1'
import './App.css'

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <>
            <div>
                <h1>Page Title</h1>
                <h2>Major section heading</h2>
                <h3>subsection of h2 elemnts</h3>
                <p>We are <span>learnig</span> to React best <a href="#">practices</a> - <hr/>DRC - Goma - Kinshasa and detroit Michigan</p>
                <ul>
                    <li>&lt; &gt; Shoes</li>
                    <li>&ntilde; &egrave; &copy; &pi; Pants</li>
                    <li>&delta; &Delta;Jeans</li>
                    <li>Socks</li>
                </ul>
                <ol>
                    <li>Shoes</li>
                    <li>Pants</li>
                    <li>Jeans</li>
                    <li>Socks</li>
                </ol>
            </div>
        <Calculator1 />
        </>
    }
}

export default App;