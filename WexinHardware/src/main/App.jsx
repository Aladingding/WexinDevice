
import React,{ PureComponent } from 'react';
import { Link } from 'react-router';
import Header from './Header.jsx';
import DataAnimal from '../component/DataAnimal.jsx';

class App extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section>
                <Header title="导航栏"/>
                <ul>
                    <li><Link to="/category">设备大类</Link></li>
                    <li><Link to="/subclass">设备子类</Link></li>
                    <li><Link to="/help">帮助页面</Link></li>
                </ul>
                <div className="intro">
                    {'window.screen.width >>>'+window.screen.width}<br/>
                    {'window.screen.availWidth >>>'+window.screen.availWidth}<br/>
                    {'window.screen.availHeight >>>'+window.screen.availHeight}<br/>
                    {'document.body.clientWidth >>>'+document.body.clientWidth}<br/>
                    {'window.innerWidth >>>'+window.innerWidth}<br/>
                </div>
                {this.props.children}
            </section>
        )
    }
}

export default App;
