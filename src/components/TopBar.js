import React, { Component } from 'react';
import { Layout, Menu, Icon} from 'antd';
import styled from "styled-components";
import logo_white from "../images/logo_white.png"
import Media from "react-media";

class TopBar extends Component {
    constructor() {
        super();
        this.state = {
            showSidebar: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getSidebar = this.getSidebar.bind(this);
    }

    handleShow() {
        this.setState({showSidebar: true});
    }

    handleClose() {
        this.setState({showSidebar: false});
    }

    getSidebar() {
        if(this.state.showSidebar) {
            return <Sidebar></Sidebar>
        }
        return;
    }

    render() {
        return (
            <div>
                <Media query="(max-width: 736px)">
                    {matches =>
                        matches ? (
                            <div>
                            <Header>
                                <Image src={logo_white}/>
                                <TitleCenter>Minghao Hu</TitleCenter>
                                <NavIcon type="menu-unfold" onClick={this.handleShow}/>
                            </Header>
                            {this.getSidebar()}
                            </div>
                        ) : (
                            <Header>
                                <Image src={logo_white}/>
                                <Title>Minghao Hu</Title>
                                <Nav id="nav">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Project</a></li>
                                        <li><a href="#">Writing</a></li>
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </Nav>
                            </Header>
                        )
                    }
                </Media>

            </div>
        )
    }
}

export default TopBar

const Image = styled.img` 
    height: 2.5em;
    vertical-align: middle;
    margin: 0 2em;
	display: inline-block;
	position: absolute;
    top: 50%;
    margin-top: -1.25em;
`;

const Title = styled.h3` 
    height: inherit;
	left: 4.5em;
	line-height: inherit;
	top: 0;
	font-size: 1.35em;
	font-weight: 200;
	color: white;
	position: absolute;
`;

const TitleCenter = styled.h3` 
    height: inherit;
	left: 50%;
	margin-left: -60px;
	line-height: inherit;
	top: 0;
	font-size: 1.35em;
	font-weight: 200;
	color: white;
	position: absolute;
`;

const Header = styled.header` 
    background: rgba(39, 40, 51, 0.965);
	// box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.25);
	cursor: default;
	height: 3.5em;
	left: 0;
	line-height: 3.5em;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
	font-size: 1.2em;
	font-weight: 100;
`;

const Nav = styled.nav` 
    position: absolute;
	right: 2em;
	top: 0;
	
	& ul {
	    margin: 0;
	    
	    & li {
	        display: inline-block;
			margin-left: 2em;
			
			& a {
			    border: 0;
				color: #FFFFFF;
				display: inline-block;
				line-height: inherit;
				outline: 0;
			}
			
			&:active {
			    color: #e44c65;
			}
		}
	}
`;

const NavIcon = styled(Icon)` 
    position: absolute;
    line-height: inherit;
    right: 0;
    font-size: 2em;
    color: white;
    padding: 0 13px;
`;

const Sidebar = styled.div`
    height: 100%;
    width: 70%;
    margin-top: 4.2em;
    position: fixed;
    background: green;
`;
