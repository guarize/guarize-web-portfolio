import React from 'react';
import homeLogo from '../assets/images/home-logo-programming.svg';

export default function HomeAvatar() {
  return (
    <section className="home-avatar">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
        className="home-svg"
      >
        <path
          id="blob"
          d="M445,346.5Q404,443,303.5,450.5Q203,458,123,404Q43,350,83.5,269.5Q124,189,168.5,137.5Q213,86,303.5,77.5Q394,69,440,159.5Q486,250,445,346.5Z"
          fill="#181818"
        />
      </svg>
      <img
        src={homeLogo}
        alt="programming logo"
        className="programming-avatar"
      />
    </section>
  );
}
