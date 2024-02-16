import {component$} from '@builder.io/qwik';
import Button from '../button';

export default component$(() => {
	return (
		<section class="w-full flex flex-col md:flex-row-reverse">
			<div class="w-full flex flex-col gap-12 px-12 py-16 md:px-32 md:py-64">
				<h1 class="text-2xl md:text-7xl font-extrabold">Educateur<br/>comportementaliste<br/>canin</h1>

				<div class="w-full flex flex-col">
					<h2 class="text-xl md:text-5xl">Etienne Codet</h2>
					<p class="md:text-2xl">07 83 65 91 80</p>
				</div>

				<Button href='https://calendly.com/codetdog/etude-de-comportement'>Rendez-vous en ligne</Button>
				<div class="w-full flex flex-row items-center gap-2">
					<a href="https://www.instagram.com/codetdog/?hl=fr" target="_blank" rel="noreferrer">
						<img src="/images/instagram.webp" width={36} height={36} alt="Logo Instagram" />
					</a>
					<a href="https://www.facebook.com/CodetDog" target="_blank" rel="noreferrer">
						<img src="/images/facebook.webp" width={36} height={36} alt="Logo Facebook" />
					</a>
				</div>
			</div>
			<div class="w-full bg-header bg-cover bg-center h-80 md:h-full" />
		</section>
	);
});
