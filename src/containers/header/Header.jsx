import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Build Your Dream Website with OpenAI</h1>
        <p>
          Welcome to the next generation of website building! At OpenAI, we
          offer state-of-the-art AI-powered solutions that will help you craft
          the website you've always envisioned. Say goodbye to ordinary
          templates and complex coding. Our platform unleashes a world of
          possibilities, enabling you to achieve breathtaking results that will
          leave your visitors in awe-inspiring.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,069 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
