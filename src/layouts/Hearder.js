import React from 'react';
import styles from './hearder.less'

class Hearder extends React.Component{
    state={
        flag: 0,
        sign: false,
        cont: false
    }
    cont=()=>{
        this.setState({
            cont: true
        })
    }
    oncont=()=>{
        this.setState({
            cont: false
        })
        this.onopen()
    }
    show=(key,item)=>{
        this.setState({
            flag:key
        })
        if(item.children.length>0){
           this.open()  
        }   
        else{
            this.onopen()
        } 
    }
    onopen=(item)=>{
        setTimeout(() => {
            if(this.state.cont ){
                
            }
            else{
                this.setState({
                    sign: false
                })  
            }
            console.log(this.state.cont)
            console.log(this.state.sign)
        },10)
    }
    open=()=>{
        setTimeout(() => {
            this.setState({
                sign: true
            })
        },20)
    }
    render(){
        const Hei=window.innerHeight-60;
        return(
            <div className={styles['menu']}>
                <ul>
                    {this.props.menu_data.map((item,index)=>{
                        return(
                            <li key={index} onMouseEnter={()=>{this.show(index,item)}}
                                            onMouseLeave={()=>{this.onopen(item)}}
                                            >{item.text}</li>
                        )
                    })}
                </ul>
                <div className={styles['menu-drown']} style={{ display: this.state.sign ? '' : 'none' , height: Hei}}
                    onMouseEnter={()=>{this.cont()}}
                    onMouseLeave={()=>{this.oncont()}}
                >    
                    {   
                        this.props.menu_data[this.state.flag].children.map((item,index)=>{
                        return(
                            <p key={index}>{item.text}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Hearder