import React, {Component,Suspense} from 'react'
import { Route, Switch, Redirect } from 'react-router';
import { Layout } from 'antd'
import  Header from '../../components/header/header';
import LeftNav from '../../components/leftnav/left-nav';
import routeList from '../../config/routeMap';

const { Footer, Sider, Content } = Layout;

class Admin extends Component {
    render () {
        return (
            <Layout style={{height: '100%'}}>
            <Sider>
              <LeftNav/>
            </Sider>
            <Layout>
              <Header>Header</Header>
              <Content style={{backgroundColor: '#fff'}}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {
                    routeList.map(i => {
                      return (
                        <Route
                        component={i.component}
                        key={i.path}
                        path={i.path}
                        />
                      )
                    })
                  }  
                  <Redirect exact from='/' to='home' />
                </Switch>
                </Suspense>
              </Content>
              <Footer style={{textAlign:'center', color: '#ccc'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        )
    }
}
export default Admin