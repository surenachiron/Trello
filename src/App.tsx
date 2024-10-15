import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import Auth from "@/pages/Auth";
import Header from "@/components/layout/Header";

function App() {
  return (
    <div className="font-open_sans">
      <Header />
      <div className="container py-2 md:py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
