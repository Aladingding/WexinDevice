
import React,{ PureComponent } from 'react';
import { Link } from 'react-router';
import Header from './Header.jsx';

class App extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section>
                <Header title="微信硬件导航"/>
                <ul>
                    <li><Link to="/category">设备大类</Link></li>
                    <li><Link to="/subclass">设备子类</Link></li>
                    <li><Link to="/help">帮助页面</Link></li>
                </ul>
                {this.props.children}
            </section>
        )
    }
}

export default App;
