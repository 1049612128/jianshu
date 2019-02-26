import styled from 'styled-components';
import logoImg from '../../static/images/logo.png'
export const HeaderWrapper =styled.div`
    width:100%;
    background-color: #fff;
    border-color: #f0f0f0;
    border-bottom:1px solid #f0f0f0;
    
`
export const Headercontain =styled.div`
    position:relative;
    height:56px;
    line-height:56px;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
 
`
export const Logo =styled.a.attrs({
    href:'/'
})`
    position:absolute;
    cursor:pointer
    top:0;
    left:0;
    width:100px;
    height:56px;
    text-align:center;
    background:url(${logoImg});
    background-size:contain;
`
export const Nav =styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`
export const NavItem =styled.a`
        padding:0 30px;
        text-align:center;
        cursor:pointer
        height:56px;
        line-height:56px;
        border-rdaius:10%;
        font-size:17px;
    &.left{
        float:left;
    }
    &.hover:hover{
        background:#f5f5f5;
    }
    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const SearchWrapper =styled.div`
    &.slide-enter{
        transitinon:all .2s ease-out;
    }
    &.slide-enter-active{
        width:320px;
        transitinon:all .2s ease-out;
    }
    &.slide-exit{
        transitinon:all .2s ease-out;
    }
    &.slide-exit-active{
        width:240px;
    }
    position:relative;
    float:left;
    .iconfont{
        position:absolute;
        right:3px;
        top:15px;
        text-align:center;
        cursor:pointer;
        border-radius:15px;
        // background:green;
        width:30px;
        line-height:30px;
        &.focused{
            background:#969696;
        }
    }

`
export const NavSearch =styled.input.attrs({
    placeholder:'搜索'
})`
    width:240px;
    height:38px;
    padding:0 30px 0 15px;
    border:1px solid #f0f0f0;
    outline:none;
    border-radius:19px;
    background:#eee;
    box-sizing:border-box;
    font-size:12px;
    cursor:pointer
    &::placeholder{
        color:#777;
    }
    &.focused{
        width:320px;
    }
`
export const Addition =styled.div`
    position:absolute;
    left:0;
    top:0;
    height:56px;
    cursor:pointer
`
export const Button =styled.div`
    float:right;
    margin-top:9px;
    line-height:38px;
    border-radius:19px;
    margin-right:20px;
    padding:0 20px;
    border:1px solid #ec6149;
    cursor:pointer
    &.write{
        color:#fff;
        background:#ea6f5a;
    }
    &.regiest:hover{
        color: #ec6149;
        border-color: #ec6149;
        background-color: rgba(236,97,73,.05);
    }
    &.regiest{
        color:#ea6f5a;
    }
`
export const I =styled.i`
    margin-right:5px;
`
export const SearchInfo =styled.div`
    padding:0px 20px;
    border-bottom: 1px solid #f0f0f0;
`
export const SearchInfoWrap =styled.div`
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    margin-top: 9px;
    width: 250px;
    left: 0;
    top: 100%;
    // visibility: hidden;
    // opacity: 0;
    border-radius: 4px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    ::before{
        content: "";
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -5px;
        z-index: -1;
    }
`
export const SearchInfoTitle =styled.div`
    width:100%;
    float: left;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoSwitch =styled.a`
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
`
export const SearchInfoList =styled.ul`
    overflow:hidden;
    float:left;
`
export const SearchInfoItem =styled.li`
    margin-right: 10px;
    float:left;
    line-height: 28px;
`
export const SearchInfoA =styled.a`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`