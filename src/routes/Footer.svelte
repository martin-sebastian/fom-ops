<script>
	import github from '$lib/images/github-fill.svg';
	import linkedin from '$lib/images/linkedin-box-fill.svg';
	import twitter from '$lib/images/twitter-x-fill.svg';
	import behance from '$lib/images/behance-fill.svg';
	import dribbble from '$lib/images/dribbble-fill.svg';
</script>

<footer
	class="flex flex-row justify-center gap-0 border-t border-gray-200 py-1 dark:border-gray-800"
>
	<div class="corner">
		<a href="https://github.com/martin-sebastian" target="_blank">
			<img class="dark:invert" src={github} alt="GitHub" />
		</a>
	</div>
	<div class="corner">
		<a href="https://www.linkedin.com/in/martinsebastian73/" target="_blank">
			<img class="dark:invert" src={linkedin} alt="LinkedIn" />
		</a>
	</div>
	<div class="corner">
		<a href="https://x.com/martisebastian" target="_blank">
			<img class="dark:invert" src={twitter} alt="Twitter X" />
		</a>
	</div>
	<div class="corner">
		<a href="https://www.behance.net/martinsebastian" target="_blank">
			<img class="dark:invert" src={behance} alt="Behance" />
		</a>
	</div>
	<div class="corner">
		<a href="https://dribbble.com/msebastianco" target="_blank">
			<img class="dark:invert" src={dribbble} alt="Dribbble" />
		</a>
	</div>
</footer>

<style>
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
		width: 1.5em;
		height: 1.5em;
		object-fit: contain;
		opacity: 0.3;
	}
	.corner img:hover {
		opacity: 1;
	}

	@media (min-width: 480px) {
		footer {
			padding: 2px 0;
		}
	}
</style>
