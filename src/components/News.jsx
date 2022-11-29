import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
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
          <div class="news-container">
          <div class="news-border">
          <div class="crypto-carddd">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div class="news-image-container">
                <h1 class="news-title" level={4}>{news.name}</h1>
                <img class="news-image" src={news?.image?.thumbnail?.contentUrl || demoImage} />
              </div>
              <p class="news-desc">{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div class="news-card-stats">
                    <img class="news-outlet-image" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}  />
                    <p class="reference-title">{moment(news.datePublished).startOf('ss').fromNow()}</p>
              </div>
              {/* <p class="card-title">{news.provider[0]?.name}</p> */}
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
