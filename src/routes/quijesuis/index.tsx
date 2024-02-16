import {component$} from '@builder.io/qwik';
import FooterBottom from '~/components/footer-bottom';

export default component$(() => {
	return (
		<>
			<main class="w-full max-w-7xl flex flex-col">
				<div class="w-full flex flex-col md:flex-row items-center p-12">
					<img src="/images/etienne.webp" alt='Etienne' width={380} height={627} />
					<div class="w-full flex flex-col gap-16 p-12">
						<h1 class="text-2xl md:text-7xl font-extrabold">
							Bienvenue chez<br/>
							<span class="text-primary">CODET</span><span class="text-secondary">DOG</span>
						</h1>
						<p class="text-xl md:text-5xl">
							Je m’apelle Etienne Codet.<br/>
							Je suis éducateur comportementaliste canin
						</p>
						<p class="text-xl md:text-5xl">07 83 65 91 80</p>
					</div>
				</div>
				<p class="w-full p-12 text-xl md:text-2xl font-extrabold">
					Je réalise avec vous, dès notre première rencontre, une étude de comportement à 35 €, afin de cibler au mieux les difficultés rencontrées,
					quelle que soit la situation.
					<br/><br/>
					J'interviens sur Brest et ses environs, autour de 30 km. Contactez-moi pour toute distance supplémentaire.
					<br/><br/>
					Je pratique des séances personnalisées, éducatives,collectives et des sports canins . Je me déplace à domicile ou en extérieur.
					<br/><br/>
					J'utilise une méthode positive mais pas permissive, dans le respect de votre chien de toute race et de tout âge (dès 2 mois jusqu'à 10 ans
					et plus), sans utiliser de collier étrangleur, torquatus ou collier électrique.
				</p>
			</main>
			<footer class="p-12">
				<FooterBottom />
			</footer>
		</>
	);
});
