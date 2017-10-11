/*
*
*  设备大类
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
                <Header title="设备大类"/>
                <h2>韩梅梅vs李磊</h2>
            </section>
        )
    }
}

export default DevCategory;
