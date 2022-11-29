
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row } from 'antd';

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Col className="price-container">
          <p level={5} className="price-change">Change: {coinHistory?.data?.change}%</p>
          <p level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</p>
        </Col>
      </Row>
      <Line className="crypto-chart" data={data} options={options} />
    </>
  );
};

export default LineChart;
