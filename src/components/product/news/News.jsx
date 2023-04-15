import React from 'react';
import './news.css';

const News = () => {
  return (
    <section className="news">
        <div className="news_text">
            <div className="news_text_head">
                <p>Read More & Subscribe To Our</p>
                <h1>Newsletter</h1>
            </div>

            <div className="textbox">
                <input type="text" placeholder='Enter your Email' />
                <a href="#hero" class="button">Subscribe</a>
            </div>

            <div className="spiderman"></div>
        </div>
  </section>

  )
}

export default News