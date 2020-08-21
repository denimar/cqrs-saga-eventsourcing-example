import React, { useState } from 'react'
import classNames from 'classnames'
import './ItemsCard.scss'

interface ItemsCardProps {
  title: string,
  items: any[],
  itemRenderer: (item: any) => {}
}

const ItemsCard: React.FC<ItemsCardProps> = ({ title, items, itemRenderer }) => {
  const [ selectedItem, setSelectedItem ] = useState(items[0])

  return (
    <div className="items-card-container">
      <div className="items-card-title">{ title }</div>
      {
        items.map((item: any) => {
          const className = classNames('items-card-row', { selected: selectedItem._id === item._id })
          return (
            <div key={ item._id } className={ className } onClick={ () => setSelectedItem(item) }>
              { itemRenderer(item) }
            </div>
          )          
        })
      }
    </div>
  )

}

export default ItemsCard