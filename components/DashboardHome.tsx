import React from 'react';
import Layout from '../components/Layout';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
    </Layout>
  );
};

export default Home;
