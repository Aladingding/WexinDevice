import React,{ Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { title='微信硬件' } = this.props;
        return <header className="header">{ title }</header>
    }
}

export default Header;