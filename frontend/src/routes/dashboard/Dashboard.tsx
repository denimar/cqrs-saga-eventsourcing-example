import React from 'react'
import './Dashboard.scss'
import NumbersBox from './components/NumbersBox/NumbersBox';
import classNames from 'classnames'
import { Calculator, Arrow90degDown, ListCheck, CreditCard } from 'react-bootstrap-icons';
import ForecastedActualGraph from './components/ForecastedActualGraph';

const Dashboard: React.FC = () => {
  const numberBoxesClasses = classNames('dashboard-number-item', 'col-xs-12', 'col-sm-12', 'col-md-6', 'col-lg-6', 'col-xl-3')
  return (
    <div className="dashboard-container container-fluid">
      <div className="dashboard-numbers row">
        <div className={ numberBoxesClasses }>
          <NumbersBox 
            type="info"
            title="Current Balance" 
            value={ 1500 }
            icon={ <Calculator color="#ffffff" size={36} /> } 
          />  
        </div>
        <div className={ numberBoxesClasses }>
          <NumbersBox 
            type="success"
            title="Incomes" 
            value={ 2653 }
            icon={ <Arrow90degDown color="#ffffff" size={36} /> } 
          />  
        </div>
        <div className={ numberBoxesClasses }>
          <NumbersBox 
            type="error"
            title="Expenses" 
            value={ 374 }
            icon={ <ListCheck color="#ffffff" size={36} /> } 
          />  
        </div>
        <div className={ numberBoxesClasses }>
          <NumbersBox 
            type="warning"
            title="Credit Card" 
            value={ 243 }
            icon={ <CreditCard color="#ffffff" size={36} /> } 
          />  
        </div>
      </div>     
      <div className={ classNames('dashboard-forecasted-vs-actual-graph') }>
        <ForecastedActualGraph />
      </div>  
    </div>
  )
}

export default Dashboard