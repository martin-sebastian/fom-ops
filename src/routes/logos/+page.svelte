<script lang="ts">
	import Facebook from '$lib/images/facebook.svg';
	import Disney from '$lib/images/disney.svg';
	import Airbnb from '$lib/images/airbnb.svg';
	import Apple from '$lib/images/apple.svg';
	import Spark from '$lib/images/spark.svg';
	import Samsung from '$lib/images/samsung.svg';
	import Quora from '$lib/images/quora.svg';
	import Sass from '$lib/images/sass.svg';
</script>

<svelte:head>
	<title>Logos</title>
	<meta name="description" content="Logos" />
</svelte:head>

<main class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-900">
	<div class="mx-auto w-full max-w-5xl px-4 py-24 md:px-6">
		<div class="text-center">
			<!-- Logo Carousel animation -->
			<div class="inline-flex w-full flex-nowrap overflow-hidden">
				<ul class="flex items-center justify-center md:justify-start">
					<li>
						<img src={Facebook} alt="Facebook" />
					</li>
					<li>
						<img src={Disney} alt="Disney" />
					</li>
					<li>
						<img src={Airbnb} alt="Airbnb" />
					</li>
					<li>
						<img src={Apple} alt="Apple" />
					</li>
					<li>
						<img src={Spark} alt="Spark" />
					</li>
					<li>
						<img src={Samsung} alt="Samsung" />
					</li>
					<li>
						<img src={Quora} alt="Quora" />
					</li>
					<li>
						<img src={Sass} alt="Sass" />
					</li>
				</ul>
			</div>
			<!-- End: Logo Carousel animation -->
		</div>
	</div>
</main>
