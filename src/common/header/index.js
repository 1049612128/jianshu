import React from 'react';
import {HeaderWrapper,Logo,Headercontain,Nav,NavItem,NavSearch,Button,I,SearchWrapper} from './style'
// import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
import  {actionCreators}  from './store'
const Header = (props) =>{
    return <HeaderWrapper>
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
                {/* <CSSTransition
                in={this.state.focused}
                timeout={200}
                classNames="slide"> */}
                    <NavSearch onFocus={props.handleInputFocus} onBlur={props.handleInputBlur} className={props.focused?'focused':''}></NavSearch>
                    <I className={props.focused?'focused iconfont':'iconfont'}>&#xe627;</I>
                {/* </CSSTransition> */}
            </SearchWrapper>
        </Nav>
    </Headercontain>
   
</HeaderWrapper>
}
// class Header extends React.Component{
//     // constructor(props){
//     //     super(props)
//     //     this.handleInputFocus=this.handleInputFocus.bind(this)
//     //     this.handleInputBlur=this.handleInputBlur.bind(this)
//     // }
//     render(){
//         return<HeaderWrapper>
//             <Headercontain>
//                 <Logo />
//                 <Button className="write"><I className="iconfont">&#xe603;</I>写文字</Button>
//                 <Button className="regiest">注册</Button>
//                 <Nav>
//                     <NavItem className="left active">  <I className="iconfont">&#xe616;</I>首页</NavItem>
//                     <NavItem className="left hover"><I className="iconfont">&#xe645;</I>下载App</NavItem>
//                     <NavItem className="right">Aa</NavItem>
//                     <NavItem className="right">登录</NavItem>
//                     <SearchWrapper>
//                         {/* <CSSTransition
//                         in={this.state.focused}
//                         timeout={200}
//                         classNames="slide"> */}
//                             <NavSearch onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur} className={this.props.focused?'focused':''}></NavSearch>
//                             <I className={this.props.focused?'focused iconfont':'iconfont'}>&#xe627;</I>
//                         {/* </CSSTransition> */}
//                     </SearchWrapper>
//                 </Nav>
//             </Headercontain>
           
//         </HeaderWrapper>
//     }
// }
const mapStateToProps =(state) =>{
    return{
        focused:state.get('header').get('focused')
    }
}
const mapDispathToProps=(dispatch) =>{
    return{
        handleInputFocus(){
            const action =actionCreators.searchFocus()
           dispatch(action)
        },
        handleInputBlur(){
          const action =actionCreators.searchBlur()
          dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);