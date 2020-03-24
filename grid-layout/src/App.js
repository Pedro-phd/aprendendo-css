import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
        rel="stylesheet"
      />
      <header>
        <h1>LOGO</h1>
        <div class="menu">
          <h3>CONTA</h3>
          <h3>CARRINHO</h3>
          <h3>CONTATO</h3>
        </div>
      </header>
      <main>
        <div class="conteudo-grande" />
        <div class="conteudo-medio-1" />
        <div class="conteudo-medio-2" />
      </main>
      <footer>
        <h1>LOGO</h1>
      </footer>
    </div>
  );
}
