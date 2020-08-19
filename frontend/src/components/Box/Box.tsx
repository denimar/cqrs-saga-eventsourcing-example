import React from 'react'
import classNames from 'classnames'
import './Box.scss'

interface IBoxAvatar {
  icon?: JSX.Element
  text?: string
  color?: string
}

interface IBoxProps {
  className?: string
  type: "warning" | "success" | "info" | "error"
  avatar?: IBoxAvatar
  title: string | JSX.Element
}

const Box: React.FC<IBoxProps> = ({ children, className, type, avatar, title }) => {
  return (
    <div className={ classNames('box-container', className && { [className]: className }) }>
      <div className="box-header-container">
        { avatar && (
            <div className={ classNames('box-header-avatar', type) }>
              { avatar.icon && avatar.icon }
              { avatar.text && avatar.text }
            </div> 
          )
        }
        <div className="box-header">{ title }</div>
      </div>
      <div className="box-body">
        { children }
      </div>
    </div>
  )  
}

export default Box