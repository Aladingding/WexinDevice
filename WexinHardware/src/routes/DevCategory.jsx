/*
*
*  设备大类
*
* */
import React,{ Component } from 'react';
import Header from '../component/Header.jsx';

class DeviceCategory extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section>
                <Header title="设备大类"/>
                <h2>conetent</h2>
            </section>
        )
    }
}

export default DeviceCategory;
