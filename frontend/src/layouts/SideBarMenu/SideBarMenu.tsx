import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import './SideBarMenu.scss'
//import sidebarBgJPG from './images/sidebar-bg.jpg'
import sidebarBgJPG from './images/floripa-santinho.jpeg'
import menuJSON from './menu.json'

const getElementMenuItem = (item: any, pathname: string, level: number) => {
  const { id, label, route, children } = item
  const selected = pathname === route
  return (
    children ? (
      <>
        <div className={ classNames('sidebar-menu-item', 'has-children', `level${level}`)}>{ label }</div>
        <div className="sidebar-menu-children">
          { children.map((menuItem: any) => getElementMenuItem(menuItem, pathname, level+1)) }
        </div>  
      </>
    ) : (
      <Link 
        key={ id }
        className={ classNames('sidebar-menu-item', `level${level}`, { selected }) } 
        to={ route }
      >
        { label }
      </Link>    
    )  
  )
}

interface ISideBarMenuProps {
  isOpen: boolean
}

const SideBarMenu: React.FC<ISideBarMenuProps> = ({ isOpen }) => {
  const location = useLocation()
  let level = 1
  return (
    <div 
      className={ classNames('sidebar-menu-container', { 'menu-open': isOpen }, { 'menu-closed': !isOpen } )}
    >
      <div className="sidebar-menu-links"> 
        {
          menuJSON.map((menuItem: any) => getElementMenuItem(menuItem, location.pathname, level))
        }
      </div>
      <img className="sidebar-background-img" src={ sidebarBgJPG } alt="sidebar_background" />            
    </div>
  )
}

export default SideBarMenu