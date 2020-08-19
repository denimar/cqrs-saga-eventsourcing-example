import React from 'react'
import NumberFormat from 'react-number-format';
import classNames from 'classnames'
import './NumbersBox.scss'
import Box from '../../../../components/Box'

interface INumbersBoxProps {
  className?: string
  type: "warning" | "success" | "info" | "error",
  title: string
  value: number
  icon: JSX.Element  
}

const NumbersBox: React.FC<INumbersBoxProps> = ({ className, type, title, value, icon }) => {
  return (
    <Box
      className={ classNames('numbersbox-container', className) }
      type={ type }
      avatar={{ icon }} 
      title={
        <>
          <div className="numbers-title">{ title }</div>
          <div className="numbers-value">
            <NumberFormat 
              value={ value } 
              displayType="text" 
              thousandSeparator={true} 
              decimalScale={2}
              fixedDecimalScale={true}
              prefix="$" 
            />
          </div>
        </>
      }
    />
  )
}

export default NumbersBox