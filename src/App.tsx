import { Routes, Route } from "react-router-dom";
import Form from "./components/form/Form";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Form/>} />
    </Routes>
    </>
  )
}

export default App
