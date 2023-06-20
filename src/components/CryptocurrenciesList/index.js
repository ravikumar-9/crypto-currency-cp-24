// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrencyList()
  }

  getCryptoCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedCryptoCurrencyList = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyName: each.currency_name,
    }))

    console.log(updatedCryptoCurrencyList)

    this.setState({currencyList: updatedCryptoCurrencyList, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state

    const load = (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    )
    return (
      <div className="crypto-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-img"
        />
        <div className="currency-container">
          <ul className="menu-container">
            <li className="coin-type">Coin Type</li>
            <div className="currency-type-menu">
              <li className="currency-type">USD</li>
              <li className="currency-type">EURO</li>
            </div>
          </ul>
          <ul className="currency-list-container">
            {isLoading
              ? load
              : currencyList.map(each => (
                  <CryptocurrencyItem currencyDetails={each} key={each.id} />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
