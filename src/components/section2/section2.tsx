import {component$} from '@builder.io/qwik';
import Button from '../button';

export default component$(() => {
	return (
		<section class="w-full flex flex-col items-center px-8 py-8 md:py-32 md:px-24">
			<div class="
				w-full max-w-7xl
				p-8 md:p-16
				flex flex-col md:flex-row-reverse gap-6 md:gap-16
				text-lg md:text-4xl
				bg-neutral rounded-sm
			">
				<div class="w-100 flex flex-col justify-center">
					<img
						src="/images/logo.webp"
						alt="Logo de Codetdog"
						width={726} height={408}
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
				</div>
				<div class="w-full flex flex-col justify-center gap-6 md:gap-16">
					<h2 class="text-2xl md:text-5xl font-extrabold">Education canine<br/>et troubles du comportement</h2>
					<p>
						Une méthode positive, mais pas permissive, dans le respect de votre chien
						de toute race et de tout âge  (de 2 mois jusqu’a 10 ans et plus)
					</p>
					<p class="text-secondary font-bold">
						Séance à domicile ou en extérieur
					</p>
					<Button href="/contact">Contact</Button>
				</div>
			</div>
		</section>
	);
});
