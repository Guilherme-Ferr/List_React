import "./App.css";
import { useState } from "react";

function Header(props) {
  return (
    <header className="header">
      <p>Hello World {props.name}</p>
      <button onClick={props.handleClick}>Trocar Usuário</button>
      {props.children}
    </header>
  );
}

function Form() {
  const [nome, setNome] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  };

  return (
    <>
      <p>{nome}</p>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={handleNome}
      />
    </>
  );
}

function App() {
  const [user, setUser] = useState("Fulano");

  const handleClick = () => {
    setUser("Ciclano");
    if (user === "Fulano") setUser("Ciclano");
    else setUser("Fulano");
  };

  return (
    <div>
      <Header name="Jé do Gado" click={handleClick}>
        <p>eu sou filho de header</p>
        <p>eu sou segundo filho de header</p>
        <p>eu sou terceiro filho de header</p>
      </Header>
      <p>My React App</p>
      <p>Nome de usuário: {user}</p>
      <hr />
      <Form />
    </div>
  );
}

export default App;
