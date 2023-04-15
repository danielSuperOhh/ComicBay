import React from 'react';
import './related.css';

const Related = () => {
  return (
    <section className="related">
        <h2 className="section__title">Related Comics</h2>
        <div className="yellow_box"></div>

      <div className="card_container">
        <div className="comic_card">
          <div className="comic_card_2"></div>

          <div className="comic_info">
            <p className="first_p">Spiderman Young Forever</p>
            <p className="second_p">By Marvel Universe</p>
            <p className="third_p">N 4000</p>
          </div>
        </div>

        <div className="comic_card">
        <div className="comic_card_3"></div>

          <div className="comic_info">
            <p className="first_p">Amazing Spiderman</p>
            <p className="second_p">By Marvel Universe</p>
            <p className="third_p">N 6000</p>
          </div>
        </div>
        <div className="comic_card">
        <div className="comic_card_5"></div>

          <div className="comic_info">
            <p className="first_p">The Humnaity Agends</p>
            <p className="second_p">By Marvel Universe</p>
            <p className="third_p">N 5400</p>
          </div>
        </div>
        <div className="comic_card">
        <div className="comic_card_4"></div>

          <div className="comic_info">
            <p className="first_p"> The Spiderman World</p>
            <p className="second_p">By Marvel Universe</p>
            <p className="third_p">N 4000</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Related