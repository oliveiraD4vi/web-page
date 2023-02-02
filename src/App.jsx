import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";

import "./styles/_default.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">Main</div>
      <Footer />
    </div>
  );
}
