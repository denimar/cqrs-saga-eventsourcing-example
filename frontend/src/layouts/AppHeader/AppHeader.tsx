import React, { Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'
import HamburgerMenu from 'react-hamburger-menu'
import './AppHeader.scss'

interface IAppHeaderProps {
  title: string
  isSideBarMenuOpen: boolean
  setSideBarMenuOpen: Dispatch<SetStateAction<boolean>>
}

const AppHeader: React.FC<IAppHeaderProps> = ({ title, isSideBarMenuOpen, setSideBarMenuOpen }) => {
  return (
    <div className="app-header-container">
      <div className={ classNames('hamburger-menu-button', { 'menu-open': isSideBarMenuOpen }, { 'menu-closed': !isSideBarMenuOpen } )}
        onClick={ () => setSideBarMenuOpen(!isSideBarMenuOpen) }
      >
        <HamburgerMenu
          isOpen={ isSideBarMenuOpen }
          menuClicked={ () => {}}
          width={ 22 }
          height={ 18 }
          strokeWidth={ 2 }
          rotate={ 0 }
          color={  isSideBarMenuOpen ? '#ffffff' : '#141e30' }
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
    </div>

  )
} 

export default AppHeader