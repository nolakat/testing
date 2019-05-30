import React from 'react';
import Header from '../components/Header';
import Cursor from '../components/Cursor';
import MyComponent from '../components/MovingBlock';
import { TransitionState } from "gatsby-plugin-transition-link";



class Canvas extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            isHover: false,
            y: '',
            x: ''
        };
    }

    _toggleHoverState = () =>{
        this.setState({ isHover: !this.state.isHover});
    }

    _onMouseMove = (e) =>{
        this.setState({x: e.clientX});
        this.setState({y: e.clientY});
    }

    render(){
        const _toggleHoverState = this._toggleHoverState;
        const children = React.Children.map(this.props.children, (child, index) =>{
            return React.cloneElement(child, {
                index,
                toggleFunc: () => this.setState({isHover: index})
            });
        });

        return(

            <main onMouseMove={this._onMouseMove}>

                <Header toggleFunc={_toggleHoverState}/>

                <pre>{JSON.stringify([this.state.x, this.state.y])}</pre>

                {children}

                <Cursor hoverState={this.state.isHover}/>
                <MyComponent/>

            </main>
        )
    }
}

export default Canvas;