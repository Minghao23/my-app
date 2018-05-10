import React, { Component } from 'react';
import './App.css';
import {Layout} from 'antd';
import TopBar from "./components/TopBar";
import styled from "styled-components";

class App extends Component {
    render() {
        let array = [];
        for(var i=0; i<100; i++) {
            array.push(<h1 key={i}>Hello! World!</h1>)
        }
        return (
            <Layout>
                <TopBar/>
                <Content>
                {array}
                </Content>
                {/*<Header>*/}
                    {/*<div/>*/}
                    {/*<Menu*/}
                        {/*theme="dark"*/}
                        {/*mode="horizontal"*/}
                        {/*defaultSelectedKeys={['2']}*/}
                        {/*style={{ lineHeight: '64px' }}*/}
                    {/*>*/}
                        {/*<Menu.Item key="1">nav 1</Menu.Item>*/}
                        {/*<Menu.Item key="2">nav 2</Menu.Item>*/}
                        {/*<Menu.Item key="3">nav 3</Menu.Item>*/}
                    {/*</Menu>*/}
                {/*</Header>*/}
                {/*<Content style={{ padding: '0 50px' }}>*/}
                    {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                        {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    {/*<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>*/}
                {/*</Content>*/}
                {/*<Footer style={{ textAlign: 'center' }}>*/}
                {/*</Footer>*/}
            </Layout>
        );
    }
}

export default App;

const Content = styled.div` 
    padding-top: 4.2em;
`;