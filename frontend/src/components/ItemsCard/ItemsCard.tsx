import React, { useState } from 'react'
import classNames from 'classnames'
import './ItemsCard.scss'
import { ApolloError } from '@apollo/client'

interface ItemsCardProps {
  title: string,
  items: any[],
  loading: boolean,
  error?: ApolloError;
  canSelect: boolean;
  itemRenderer: (item: any) => {}
  onSelectedItem?: (item: any) => void
}

const ItemsCard: React.FC<ItemsCardProps> = ({ title, loading, error, canSelect, items, itemRenderer, onSelectedItem }) => {
  const [ selectedItem, setSelectedItem ] = useState({_id: null})
  if (error) return <p>{ `Error: ${error.message}`}</p>;  

  const itemClick = (item: any) => {
    setSelectedItem(item)
    if (onSelectedItem) onSelectedItem(item)
  }

  return (
    <div className="items-card-container">
      <div className="items-card-title">{ title }</div>
      {
        loading ? <p>Loading...</p> : (
          items.map((item: any) => {
            const selected = canSelect && selectedItem._id === item._id
            const className = classNames('items-card-row', { selected })
            return (
              <div key={ item._id } className={ className } onClick={ () => itemClick(item) }>
                { itemRenderer(item) }
              </div>
            )          
          })
        )
      }
    </div>
  )

}

export default ItemsCard