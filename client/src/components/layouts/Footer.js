import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <span
        style={{
          color: "#fff",
          position: "relative",
          top: "1rem",
          left: "1rem",
        }}
      >
        &copy; {new Date().getFullYear()} All Right Reserved.&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/junghong91/Blog-App-MERN-Stack">
          Github: github.com/junghong91
        </a>
      </span>
    </FooterContainer>
  );
};

export default Footer;

// FOOTER CONTAINER
const FooterContainer = styled.footer`
  background: #344 !important;
  height: 4rem;
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
`;
