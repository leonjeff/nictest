import "./app.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Card } from "./components/card";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
