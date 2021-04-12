<script lang="ts">
	import { onMount } from "svelte";

	import Blockly from "./components/Blockly.svelte";

	let xml = "";

	onMount(async () => {
		const response = await fetch("/example.xml");
		xml = await response.text();
	});
</script>

<main>
	{#if xml}
		<Blockly initialXML={xml} />
	{/if}
</main>

<style>
	main {
		margin: 0 auto;
		background: #dddddd;
		height: 100vh;
	}
</style>
