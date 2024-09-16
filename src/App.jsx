import "./App.css";
import { Header } from "./components/header";
import TablePage from "./pages/table-page/TablePage";
import HomePage from "./pages/home-page/HomePage";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/not-found/NotFound";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table/:id" element={<TablePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
