<script>
import { Link } from "svelte-navigator";

</script>
<div id="container">
  
  <section id="title">
    <h3>Bem vindo!</h3>
    <h1>Esta é a introdução a API do SISRG</h1>
  </section>

  <section>
    <h3>Prelúdio</h3>
    <p>Esta API não é publica. Portanto, o uso da mesma não compete à desenvolvedores de fora dos serviços ao Instituto Pedro mello e/ou Departamento de Polícia técnica.</p>
    <p>Esta documentação tem sído desenhada em prol de trazer ao desenvolvedor conforto e poder de produtividade, portanto, qualquer rota que for adicionada ao back-end
      desse serviço, deve ser documentada aqui nesse local, utilizando o padrão de design já utilizado.
    </p>
    <strong>A documentação começa aqui...</strong>
  </section>

  <section>
    <div id="title">
      <h3>Rotas!</h3>
      <h1>Ainda não verás as rotas disponíveis, pois esta página tem apenas o intuito de introduzir o desenvolvedor a algumas regras.</h1>
    </div>
    <p>Agora que já sabe algumas regrinhas e boas práticas, pode começar a ver a documentação utilizando os menús ou clicando em uma das entidades abaixo.</p>
      <strong>Você precisa trabalhar com qual entidade?</strong>
      <ul>
        <Link to="/admin" > <li>Administradores</li></Link>
        <Link to="/usuario" > <li>Usuarios comuns</li></Link>
      </ul>
    
  </section>

</div>

<style>
#container {
  width: 60%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #35343D;
  padding: 35px;
}

#title {
  border-bottom: solid #35343D 1px;
  
}

#title h3 {
  font-size: 0.9em;
  outline: none;
}

#title h1 {
  font-size: 1.1em;
}

p {
  font-size: 0.9em;
  margin-top: 2em;
  margin-bottom: 2em;
}

section {
  margin-bottom: 3em;
  margin-top: 3em;
}

</style>
