
import React,{ Component } from 'react';
import Header from '../main/Header.jsx';
class DataAnimal extends Component{
    constructor(props){
        super(props);
        this.state = {
            inside: [0,1,2,3,4,5,6,7],
            outside: [0,1,2,3,4,5,6,7],
        };
        this.timer = null;
    }
    componentDidMount(){
        let self = this;
        this.slider = function(){
            let {outside,inside}  = self.state;
            inside.push(inside[0]);
            outside.push(outside[0]);
            inside.shift();
            outside.shift();
            self.setState({ outside, inside });
        };
        this.timer = setInterval(this.slider,2000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        let { inside,outside }  = this.state;
        console.log(outside,'outside');
        let environmentInfo = [
            {
                text:'PM2.5：',
                value:11||'0',
                minVal:22,
                maxVal:212
            },
            {
                text:'PM10：',
                value:3123||'0',
                minVal:12312,
                maxVal:123
            },
            {
                text:'臭氧浓度：',
                value:312||'0',
                minVal:23123,
                maxVal:3212
            },
            {
                text:'NO₂浓度：',
                value:312||'0',
                minVal:312,
                maxVal:31
            },
            {
                text:'NO浓度：',
                value:312/2||'0',
                minVal:12312,
                maxVal:213/2
            },
            {
                text:'SO₂浓度：',
                value:312||'0',
                minVal:312,
                maxVal:312
            },
            {
                text:'CO浓度：',
                value:213,
                minVal:312,
                maxVal:3212
            },
            {
                text:'空气压力：',
                value:3123||'0',
                minVal:312,
                maxVal:31
            },
            {
                text:'风：',
                value:312||'0',
                minVal:312,
                maxVal:312
            },
        ];
        return (
            <section>
                <Header title="数据流动" />
                <ul className="list-animal">
                    {
                        outside.map((index)=>{
                            return <li key={index}>
                                <span className='type'>{environmentInfo[index].text}</span>
                                <span>{environmentInfo[index].value}</span>
                                <span>{environmentInfo[index].minVal}</span>
                                <span>{environmentInfo[index].maxVal}</span>
                            </li>
                        })
                    }
                </ul>
                <Header title="数据流动-2" />
                <ul className="list-animal">
                    {
                        outside.map((index)=>{
                            return <li key={index}>
                                <span className='type'>{environmentInfo[index].text}</span>
                                <span>{environmentInfo[index].value}</span>
                                <span>{environmentInfo[index].minVal}</span>
                                <span>{environmentInfo[index].maxVal}</span>
                            </li>
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default DataAnimal;
