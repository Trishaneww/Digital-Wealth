import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import {PlusOutlined } from '@ant-design/icons';
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
      <Row  gutter={[32, 32]}>
        <div class="global-stats" >
        <Col className="space" span={4}>
          <div>
            <p class="title">Cryptocurrencies</p>
            <p class="num">{globalStats.total}</p>
          </div>
        </Col>
        <Col className="space" span={4}>
          <div class="ban">
            <p class="title">Exchanges</p>
            <p class="num">{millify(globalStats.totalExchanges)}</p>
          </div>
        </Col>
        <Col className="space" span={4}>
          <div>
            <p class="title">Market Cap</p>
            <p class="num">{`$${millify(globalStats.totalMarketCap)}`}</p>
          </div>
        </Col>
        <Col className="space" span={4}>
          <div>
            <p class="title">24h Volume</p>
            <p class="num">{`$${millify(globalStats.total24hVolume)}`}</p>
          </div>
        </Col>
        <Col className="space" span={4}>
          <div>
            <p class="title">Markets</p>
            <p class="num">{millify(globalStats.totalMarkets)}</p>
          </div>
        </Col>
        </div>
      </Row>

      <div className="home-heading-container">
        <h1 class="home-title">Top 10 Cryptos In The World</h1>
        <a class="plus-icon" href="/cryptocurrencies">{<PlusOutlined />}</a>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <h1 class="home-title">Latest Crypto News</h1>
        <a class="plus-icon" href="/news">{<PlusOutlined />}</a>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;