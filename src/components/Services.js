import React from "react";

const Services = props => {
  return (
    <div className="services-container">
      <h2>SERVICES</h2>
      <h3>Lorem ipsum dolor sit amet consectetur</h3>

      <div
        className="
cart-container"
      >
        <div className="ecommerce-container">
          <img
            src="https://image.freepik.com/free-icon/shopping-cart-circle_318-27919.jpg"
            alt="cart"
          />
          <h4>E-Commerce</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="design-container">
          <img
            src="https://image.freepik.com/free-icon/shopping-cart-circle_318-27919.jpg"
            alt="cart"
          />
          <h4>Responsive Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="web-container">
          <img
            src="https://image.freepik.com/free-icon/shopping-cart-circle_318-27919.jpg"
            alt="cart"
          />
          <h4>Web Security</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
