import logo from "./logo.svg";
import "./App.css";

import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState();

  const callBackend = async ({ name }) => {
    const response = await axios.post("http://localhost:3001/users", {
      name,
    });

    setUsers(response.data.users);
  };

  const formik = useFormik({
    initialValues: { name: "initialName" },
    onSubmit: callBackend,
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          target="_blank"
          className="App-link"
          rel="noopener noreferrer"
          href="https://reactjs.org"
        >
          Hello React
        </a>

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          <button type="submit">adicionar usuários</button>
        </form>

        <ul>
          {users?.map((user) => (
            <li>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
