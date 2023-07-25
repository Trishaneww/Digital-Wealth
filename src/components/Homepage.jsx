import React from 'react';
import millify from 'millify';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';


const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <div>

        {/* renders the current global crypto statistics as a banner */}
        <div className="global-stats">
          <div className="space">
            <div>
              <p className="title">Cryptocurrencies</p>
              <p className="num">{globalStats.total}</p>
            </div>
          </div>
          <div className="space">
            <div className="ban">
              <p className="title">Exchanges</p>
              <p className="num">{millify(globalStats.totalExchanges)}</p>
            </div>
          </div>
          <div className="space">
            <div>
              <p className="title">Market Cap</p>
              <p className="num">{`$${millify(globalStats.totalMarketCap)}`}</p>
            </div>
          </div>
          <div className="space">
            <div>
              <p className="title">24h Volume</p>
              <p className="num">{`$${millify(globalStats.total24hVolume)}`}</p>
            </div>
          </div>
          <div className="space">
            <div>
              <p className="title">Markets</p>
              <p className="num">{millify(globalStats.totalMarkets)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* displays a preview to the cryptocurrencies page */}
      <div className="home-heading-container">
        <h1 className="home-title">Top 10 Cryptos In The World</h1>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies"><PlusOutlined /></Link></Title>
      </div>
      <Cryptocurrencies simplified />

      {/* displays a preview to the newspage */}
      <div className="home-heading-container">
        <h1 className="home-title">Latest Crypto News</h1>
        <Title level={3}><Link to="/news"><PlusOutlined /></Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
