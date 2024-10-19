<script>
	import github from '$lib/images/github.svg';
</script>

<footer class="border-t border-gray-200 py-12 text-center">
	<p>FomOps by <a href="https://martinsebastian.co" target="_blank">martin sebastian</a></p>
	<div class="corner">
		<a href="https://github.com/martin-sebastian">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}
	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
