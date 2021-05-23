<script>
import RouteCard from "../components/RouteCard/RouteCard.svelte";
</script>

<div id="container">
  
  <section id="title">
    <h3>Administração</h3>
    <h1>Rotas com recursos adicionais.</h1>
  </section>

  <section>
    <h3>Recursos</h3>
    <p>Nessa página, listamos as rotas que apenas usuários autenticados como administrador conseguem usar.</p>
    <p>Essas rotas, criam, alteram e gerenciam postos SAC's do interior ou da capital, gerenciam também os chefes de postos
      e horários. Registros e Relatórios possuem mais recursos também.
    </p>
  </section>

  <section>
    <div id="title">
      <h3>Tratando usuários.</h3>
      <h1>A criação de usuários (funcionários) é recurso exclusivo de <i>Administradores</i></h1>
    </div>

    <p>Agora que já sabe algumas regrinhas e boas práticas, pode começar a ver a documentação utilizando os menús ou clicando em uma das entidades abaixo.</p>
    <div id="spacingDIV">
      <strong>Rota para buscar Usuarios</strong>
      <RouteCard url="/usuarios" method="GET" color="#7785FD" />
    </div>
    <div id="spacingDIV">
    <strong>Rota para buscar Usuario específico</strong>
    <RouteCard url="/usuarios/:id" method="GET" color="#7785FD" />
    </div>
    <div id="spacingDIV">
    <strong>Rota para Criar Usuarios</strong>
    <RouteCard url="/usuarios" method="POST" color="#1AB0B0" />
    </div>
    <div id="spacingDIV">
    <strong>Rota para Atualizar Usuario</strong>
    <RouteCard url="/usuarios" method="PUT" color="#5CA0EE" />
    </div>
    <div id="spacingDIV">
    <strong>Rota para Deletar Usuario específico</strong>
    <RouteCard url="/usuarios/:id" method="DELETE" color="tomato" />
    </div>
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

#spacingDIV {
  margin-top: 35px;
  margin-bottom: 35px;
}

</style>