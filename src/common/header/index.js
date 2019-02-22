import React from 'react';
import {HeaderWrapper,Logo,Headercontain,Nav,NavItem,NavSearch,Button,I,SearchWrapper} from './style'
import { CSSTransition } from 'react-transition-group';
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            focused:false
        }
        this.handleInputFocus=this.handleInputFocus.bind(this)
        this.handleInputBlur=this.handleInputBlur.bind(this)
    }
    render(){
        return<HeaderWrapper>
            <Headercontain>
                <Logo />
                <Button className="write"><I className="iconfont">&#xe603;</I>写文字</Button>
                <Button className="regiest">注册</Button>
                <Nav>
                    <NavItem className="left active">  <I className="iconfont">&#xe616;</I>首页</NavItem>
                    <NavItem className="left hover"><I className="iconfont">&#xe645;</I>下载App</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={this.state.focused}
                        timeout={200}
                        classNames="slide"
                        >
                            <NavSearch onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} className={this.state.focused?'focused':''}></NavSearch>
                            <I className={this.state.focused?'focused iconfont':'iconfont'}>&#xe627;</I>
                        </CSSTransition>
                    </SearchWrapper>
                </Nav>
            </Headercontain>
           
        </HeaderWrapper>
    }
    handleInputFocus(){
        this.setState(()=>({
            focused:true
        }))
    };
    handleInputBlur(){
        this.setState(()=>({
            focused:false
        }))
    }
}
export default Header;