import React, { useState } from 'react';
import { Select, Row, Col } from 'antd';
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <div className="news-container">
            <div className="news-border">
              <div className="crypto-carddd">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <h1 className="news-title" level={4}>{news.name}</h1>
                    <img className="news-image" src={news?.image?.thumbnail?.contentUrl || demoImage} />
                  </div>
                  <p className="news-desc">{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                  <div className="news-card-stats">
                    <img className="news-outlet-image" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                    <p className="reference-title">{moment(news.datePublished).startOf('ss').fromNow()}</p>
                  </div>
                  {/* <p className="card-title">{news.provider[0]?.name}</p> */}
                </a>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default News;
