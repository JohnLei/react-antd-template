import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import menuList from "../../config/menuConfig";

import "./leftnav.scss";
const { SubMenu } = Menu;

class LeftNav extends Component {
  menuTreeNode = []
  openKey = '';
  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname;
    return menuList.map((i, x) => {
      if (!i.children) {
        return (
          <Menu.Item key={i.path} icon={i.icon} >
          <Link to={i.path}>
            {i.title}
          </Link>
         </Menu.Item>
        )
      } else {
      const Citem = i.children.find(item => item.path === path)
      if(Citem) {
        this.openKey = i.path
      }
        return (
          <SubMenu key={i.path} icon={i.icon} title={i.title}>
          {
            this.getMenuNodes(i.children)
          }
        </SubMenu>
        )
      }
    })
  }
  UNSAFE_componentWillMount() {
    this.menuTreeNode = this.getMenuNodes(menuList)
  }
  render() {
    const path = this.props.location.pathname
    return (
      <div className="nav-container">
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[path]}
          defaultOpenKeys={[this.openKey]}
        >
          {
           this.menuTreeNode
          }
        </Menu>
      </div>
    );
  }
}
export default withRouter(LeftNav);
