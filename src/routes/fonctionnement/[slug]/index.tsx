import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import {useLocation} from '@builder.io/qwik-city';
import Button from '~/components/button';
import FonctionnementContent from '~/components/fonctionnement/fonctionnement-content';
import FooterBottom from '~/components/footer-bottom';
import {fonctionnements} from '~/utils/fonctionnements';

export default component$(() => {
	const loc = useLocation();

	const fonctionnement = fonctionnements.find((f) => f.slug == loc.params.slug);

	if (fonctionnement == null) {
		return (
			<main class="w-full flex flex-col items-center">
				<h1 class="text-2xl md:text-5xl font-extrabold">Vous vous êtes trompé</h1>
			</main>
		);
	}

	return (
		<>
			<main class="w-full flex flex-col items-center pt-16">
				<div class="w-full flex flex-cols items-start p-12">
					<Button href='/fonctionnement'>&#60;  Retour</Button>
				</div>
				<h1 class="text-2xl md:text-5xl font-extrabold">{fonctionnement.title}</h1>
				<div class="w-full max-w-7xl p-16">
					<FonctionnementContent slug={fonctionnement.slug} />
				</div>
				<div class="w-full flex flex-col md:flex-row justify-center items-center gap-10">
					{fonctionnement.duration != null && (
						<div class="flex flex-row mx-8 p-8 md:p-12 border border-primary rounded-md">
							<span class="text-primary">
								{/* eslint-disable-next-line max-len */}
								<svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g></svg>
							</span>
							<div class="px-8 md:px-12 py-4 flex flex-col justify-between">
								<h2 class="font-bold">Durée de la séance</h2>
								<p class="text-2xl md:text-4xl font-extrabold">{fonctionnement.duration}</p>
							</div>
						</div>
					)}
					{fonctionnement.price != null && (
						<div class="flex flex-row mx-8 p-8 md:p-12 border border-secondary rounded-md">
							<span class="text-secondary">
								{/* eslint-disable-next-line max-len */}
								<svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 9.8a2.59 2.59 0 0 1-1 .2a2.88 2.88 0 0 1-2.75-3A2.88 2.88 0 0 1 7.5 4a2.76 2.76 0 0 1 .82.13M3.5 6h3m-3 2h3"/><circle cx="7" cy="7" r="6.5"/></g></svg>
							</span>
							<div class="px-8 md:px-12 py-4 flex flex-col justify-between">
								<h2 class="font-bold">Tarifs pour une séance</h2>
								<p class="text-2xl md:text-4xl font-extrabold">{fonctionnement.price}</p>
							</div>
						</div>
					)}
				</div>
			</main>
			<footer class="py-16 w-full flex flex-col items-center gap-10 text-bold">
				<p>Prenez rendez-vous ou n'hésitez pas à nous contacter</p>
				<div class="flex flex-col items-stretch gap-4">
					<Button class="w-full" href={fonctionnement.calendly}>Rendez-vous en ligne</Button>
					<Button class="w-full" href='tel:+33783659180'>07 83 65 91 80</Button>
				</div>
				<div class="w-full flex flex-col">
					<p>Calendrier et paiement sécurisé en ligne.</p>
					<img src='/images/paiements.webp' alt='Moyen de paiement' width={326} height={102} />
				</div>
				<FooterBottom />
			</footer>
		</>
	);
});

export const head: DocumentHead = {
	title: 'CodetDog',
	meta: [
		{
			name: 'description',
			content: 'Le site de CodetDog',
		},
	],
};
