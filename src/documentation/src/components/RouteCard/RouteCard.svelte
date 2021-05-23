<script>
	export let url
  export let method
  export let color
</script>

<div id="RouteCard">
  <span>{ url } <span style={`${ color && "background:" + color + ";" }`} id="method">{ method ? method : '' }</span></span>
</div>

<style>
  #RouteCard {
    background: #F4F6F8;
    border-left: solid 2px #35343D;
    width: max-content;
    max-width: 400px;
    height: max-content;
    padding-left: 15px;
    padding-right: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 3px;
  }

  #RouteCard span {
    margin-left: 7px;
    font-size: 0.9em;
  }

  #method {
    background: #7CC8A4;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

</style>