/*
* 设备小类
*
*
* */

import React,{ Component } from 'react';
import Header from '../component/Header.jsx';

class DevCategory extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section>
                <Header/>
                {this.props.children}
            </section>
        )
    }
}

export default DevCategory;
