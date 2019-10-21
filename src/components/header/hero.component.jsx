import React from "react";
import "./hero.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//TODO: Refactor Hero Component to Use React syntax
const Hero = () => (
  <div
    id="SVGheroComponents"
    className="bg-primary position-relative overflow-hidden"
  >
    <div className="container position-relative space-3 space-top-md-5 space-lg-4 z-index-2">
      <div className="text-center mb-7">
        <div className="w-lg-80 mx-auto">
          <h1 className="display-4 font-size-md-down-5 text-white mb-3">
            Say <span className="font-weight-semi-bold">Hello</span> to all
            businesses
          </h1>
        </div>
        <div className="w-md-80 w-lg-60 mx-auto">
          <p className="lead text-white-70">
            Achieve virtually any design and layout from within the one
            template. Attract more visitors, and win more business with Front
            template.
          </p>
        </div>
      </div>

      <form className="js-validate w-md-50 w-lg-40 mx-auto">
        <label className="sr-only" htmlFor="heroSubscribeSrEmail">
          Enter your email address
        </label>
        <div className="input-group input-group-lg input-group-borderless input-group-pill">
          <input
            type="email"
            className="form-control"
            name="email"
            id="heroSubscribeSrEmail"
            placeholder="Enter your email address"
            aria-label="Enter your email address"
            aria-describedby="heroSubscribeButton"
          />
          <div className="input-group-append">
            <button
              className="btn btn-white text-primary"
              type="button"
              id="heroSubscribeButton"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Hero;
