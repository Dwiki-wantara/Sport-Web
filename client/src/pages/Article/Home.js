import React from "react";
import Navbar from "../../components/Navbar";
import Body from "../../components/Home";
import FooterHome from "../../components/FooterHome";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <FooterHome/>
    </div>
  );
}
