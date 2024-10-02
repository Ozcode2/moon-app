import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import { FaInfinity } from "react-icons/fa";
const Home = () => {
  const [count, setCount] = useState(0);
  const [increase, setIncrease] = useState(0);

  const [hasIntersected, setHasIntersected] = useState(false);

  const componentRef = useRef(null);

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasIntersected(true); // Component is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Timer for `count` (0 to 8) - starts only when component is visible
    if (hasIntersected && count < 8) {
      const countTimer = setTimeout(() => setCount(count + 1), 200);
      return () => clearTimeout(countTimer);
    }
  }, [count, hasIntersected]); // Depends on `count` and visibility

  useEffect(() => {
    // Timer for `increase` (0% to 20%) - starts only when component is visible
    if (hasIntersected && increase < 20) {
      const increaseTimer = setTimeout(() => setIncrease(increase + 1), 100);
      return () => clearTimeout(increaseTimer);
    }
  }, [increase, hasIntersected]); // Depends on `increase` and visibility
  return (
    <div className="home" ref={componentRef}>
      <div className="home__stats">
        <div className="counter-wrapper">
          <div className="counterup">{count}</div>
          <div className="counterup__span">Trading Bot Functions</div>
        </div>

        <div className="counter-wrapper">
          <div className="counterup">
            <FaInfinity />
          </div>
          <div className="counterup__span">Wallets</div>
        </div>

        <div className="counter-wrapper">
          <div className="counterup">
            {increase}
            <span className="counter-span">%</span>
          </div>
          <div className="counterup__span">Referral fee share</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
