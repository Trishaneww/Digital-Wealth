import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <div className="lol">
                <div className="crypto-cardd">
                  <div className="crypto-header">
                    <img className="crypto-image" src={currency.iconUrl} />
                    <p className="name">{currency.name} #{currency.rank}</p>
                  </div>
                  <div className="crypto-card-stats">
                    <div>
                      <p className="card-title">Price</p>
                      <p className="stat-title">{millify(currency.price)}</p>
                    </div>
                    <div>
                      <p className="card-title">Market Cap</p>
                      <p className="stat-title">{millify(currency.marketCap)}</p>
                    </div>
                    <div>
                      <p className="card-title">Daily Change</p>
                      <p className="stat-title">{currency.change}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
