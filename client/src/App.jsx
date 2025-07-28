import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import logo from "./assets/logo.png";
import Alert from "./components/Alert";

function App() {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="h-20 w-20" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="w-full min-h-[calc(100vh-93px)] sm:p-8 px-4 py-4 bg-[#f9fafe]">
        <Routes>
          <Route
            path="/"
            element={<Home setAlertMessage={setAlertMessage} />}
          />
          <Route
            path="/create-post"
            element={<CreatePost setAlertMessage={setAlertMessage} />}
          />
        </Routes>
      </main>

      {showAlert && (
        <Alert message={alertMessage} onClose={() => setShowAlert(false)} />
      )}
    </BrowserRouter>
  );
}

export default App;
