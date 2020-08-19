import React, { useState } from 'react'
import classNames from 'classnames'
import './CustomersCard.scss'

interface ICustomersCardItem {
  _id: string,
  avatar: string,
  name: string
}  

interface ICustomersCardProps {
  customers: ICustomersCardItem[]
}

const CustomersCard: React.FC<ICustomersCardProps> = ({ customers }) => {
  const [ selectedCustomer, setSelectedCustomer ] = useState(customers[0])

  return (
    <div className="customers-card-container">
      <div className="customers-card-title">Customers 444</div>
      {
        customers.map((customer: ICustomersCardItem) => {
          const { _id, avatar, name } = customer
          const className = classNames('customers-card-row', { selected: selectedCustomer._id === _id })
          return (
            <div key={ _id } className={ className } onClick={ () => setSelectedCustomer(customer) }>
              <img src={ avatar } alt="avatar" />
              <span className="customers-card-name">{ name }</span>
            </div>
          )
        })
      }
    </div>
  )

}

export default CustomersCard