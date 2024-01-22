import logo from "./logo.svg";
import "./css/style.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Nav } from "./components/navigation/Nav";
import { Modal } from "./components/popup/Modal";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
function id() {
  return nanoid();
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="wrapper">
      <Nav setIsModalOpen={setIsModalOpen} />
      <Header />
      <Main />
      <Footer />
      <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
}

export default App;
