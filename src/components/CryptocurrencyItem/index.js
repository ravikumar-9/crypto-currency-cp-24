// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  console.log(props)
  const {currencyDetails} = props

  const {currencyLogo, currencyName, usdValue, euroValue} = currencyDetails
  return (
    <li className="currency-containers">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />

        <p className="curr-name">{currencyName}</p>
      </div>
      <div className="curr-value-container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
