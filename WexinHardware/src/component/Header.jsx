import React,{ PureComponent } from 'react';

class Header extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        const { title='微信硬件' } = this.props;
        return <header className="header">{ title }</header>
    }
}

export default Header;