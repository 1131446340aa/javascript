import React, { Component } from 'react'
import Name from './name'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
// import { CSSTransition } from 'react-transition-group'
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/"></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><i className="iconfont icon-Aa"></i></NavItem>
                    <SearchWrapper>
                        {/* <CSSTransition
                            timeout={200}
                            // in={props.focused}
                            classNames="slide"
                        > */}
                            {/* slide-enter slide-enter-active  slide-exit slide-exit-active */}
                            <NavSearch
                                // className={props.focused ? 'focused' : ''}
                                // onFocus={props.handleInputFocus}
                                // onBlur={props.bandleInputBlur}
                            ></NavSearch>
                        {/* </CSSTransition> */}
                        {/* <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe64d;</span> */}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className="reg"><i className="iconfont icon-quill"></i>写文章</Button>
                    <Button>注册</Button>
                </Addition>
                <Name age="123">1234</Name>
            </HeaderWrapper>
        )
    }
}
export default Header