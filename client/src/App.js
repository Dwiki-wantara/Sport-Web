import { Routes, Route, useNavigate } from "react-router-dom";
import ArticleHome from "./pages/Article/Home";
import ArticleDetail from "./pages/Article/Detail";
import ArticleAdd from "./pages/Article/AddArticle";
import ArticleUpdate from "./pages/Article/Update";

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<ArticleHome />} /> 
      <Route path="/detail-article/:id" element={<ArticleDetail />} />
      <Route path="/add-article" element={<ArticleAdd />} />
      <Route path="/update-article/:id" element={<ArticleUpdate />} />
    </Routes>
  );
}

export default App;
