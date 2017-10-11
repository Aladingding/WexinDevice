/*
* 设备小类
*
*
* */

import React,{ PureComponent } from 'react';
import Header from '../component/Header.jsx';

class DevCategory extends PureComponent{
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
