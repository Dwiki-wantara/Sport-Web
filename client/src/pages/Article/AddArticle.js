import React from "react";
import Navbar from "../../components/Navbar";
import AddArticle from "../../components/AddArticle";
import FooterHome from "../../components/FooterHome"

export default function Article() {
  return (
    <div>
      <Navbar />
      <AddArticle />
      <FooterHome/>
    </div>
  );
}
