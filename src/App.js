// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <Container className="container">
      <TodoList className="app" />
    </Container>
  );
}

export default App;
