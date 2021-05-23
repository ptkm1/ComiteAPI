<script>
  import { Link } from "svelte-navigator";
</script>

<div id="container">

    <img src="./logo.svg" alt="logoDPT" style="width: 3em; margin-left: 2em;">

    <div id="wellcome">
      <h3>Por onde começar?</h3>
      <Link to="/" style="color: #35343D;"><h2>Introdução</h2></Link >
    </div>

    <div id="wellcome">
      <h3>Rotas</h3>
    <Link to="admin" style="
    color: #35343D;
    margin-left: 2em;
    font-size: 0.9em;
    ">Rotas de Administradores</Link>
    <Link to="usuarios" style="
    color: #35343D;
    margin-left: 2em;
    font-size: 0.9em;
    ">Rotas de Usuarios</Link>
  </div>

</div>
<style>
#container {
  background: #F4F6FA;
  width: 13vw;
  height: 100vh;
  margin: 0; padding: 0; box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  color: gray;
  z-index: 50;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 10%;
}

#wellcome {
  width: 100%;
}

#wellcome h3 {
  color: gray;
  margin-left: 2em;
  font-size: 0.9em;
}

#wellcome h2 {
  margin-left: 2em;
  font-size: 0.9em;
}

</style>
