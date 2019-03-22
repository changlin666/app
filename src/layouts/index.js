import React from 'react';
import Hearder from './Hearder';
import styles from './index.less';

const menu_data=[
  {text: '一级菜单1',
  children:[
    {text: '二级菜单1-1'},
    {text: '二级菜单1-2'},
    {text: '二级菜单1-3'}
  ]
},
  {text: '一级菜单2',
  children:[
    {text: '二级菜单2-1'},
    {text: '二级菜单2-2'},
    {text: '二级菜单2-3'}
  ]
},
{text: '一级菜单3',
  children:[
    {text: '二级菜单3-1'},
    {text: '二级菜单3-2'},
    {text: '二级菜单3-3'}
  ]
},
{text: '一级菜单4',
  children:[]
},
{text: '一级菜单5',
  children:[
    {text: '二级菜单5-1'},
    {text: '二级菜单5-2'},
    {text: '二级菜单5-3'}
  ]
}]

class BasicLayout extends React.Component{
  render(){
    return(
      <Hearder menu_data={menu_data}></Hearder>
    )
  }
}
export default BasicLayout;
