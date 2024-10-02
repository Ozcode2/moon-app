
import React, { useEffect, useRef } from "react";
import "./Invite.css";

const Invite = () => {
  const inviteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add class to start animations
          inviteRef.current.classList.add("in-view");
        } else {
          // Remove class if you want the animation to reset when out of view
          inviteRef.current.classList.remove("in-view");
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is in view
      }
    );

    if (inviteRef.current) {
      observer.observe(inviteRef.current);
    }

    return () => {
      if (inviteRef.current) {
        observer.unobserve(inviteRef.current);
      }
    };
  }, []);

  return (
    <div className="home-invite" ref={inviteRef}>
      <div className="home-invite-title-wrapper">
        <div className="home-invite-strip-1">
          <h1 className="h-large">
            Invite Your{" "}
            <span className="blue-span">
              Friends
              <br />
            </span>
          </h1>
        </div>
        <div className="home-invite-strip-2">
          <h1 className="h-large">
            <span className="blue-span">To Moon App</span> And
            <br />
          </h1>
        </div>
        <div className="home-invite-strip-3">
          <h1 className="h-large">Get Paid</h1>
        </div>
      </div>
    </div>
  );
};

export default Invite;
