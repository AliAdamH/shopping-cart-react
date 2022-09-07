import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="hero">
      <div className="home">
        <h1 className="home__title">
          Over 300 unique and rare
          <span className="home__title__fancy"> Flowers</span> from all over the
          globe
        </h1>
        <Link className="home__link" to="/product">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
