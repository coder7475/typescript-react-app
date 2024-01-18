import { Routes, Route } from "react-router-dom";
import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/second" element={<Posts/>} />
    </Routes>
    </>
  )
}

export default App
