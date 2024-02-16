import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import Button from '~/components/button';
import FonctionnementCard from '~/components/fonctionnement/fonctionnement-card';
import FooterBottom from '~/components/footer-bottom';
import {fonctionnements} from '~/utils/fonctionnements';

export default component$(() => {
	return (
		<>
			<main class="
				w-full pt-12
				flex flex-col items-center
			">
				<h1 class="text-2xl md:text-5xl font-extrabold">Nous avons des solutions</h1>

				<div class="w-full max-w-[120rem] flex flex-col">
					<div class="w-full pl-32 flex flex-row">
						<img src="/images/fonctionnement-dog.webp" alt='Illustration chien' width={331} height={178} />
					</div>
					<div class="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						{fonctionnements.map((fonctionnement, i) => (
							<FonctionnementCard
								key={i}
								title={fonctionnement.title}
								summary={fonctionnement.summary}
								slug={fonctionnement.slug}
							/>
						))}
					</div>
				</div>
			</main>
			<footer class="pt-12 md:pt-48 pb-8 w-full flex flex-col items-center">
				<div class="w-full flex flex-col items-center">
					<Button href='https://calendly.com/codetdog/etude-de-comportement'>Rendez-vous en ligne</Button>
				</div>
				<div class="md:relative md:block flex flex-col w-full items-center gap-6 py-12">
					<div class="flex flex-col md:absolute md:left-6 md:top-12">
						<p>Calendrier et paiement sécurisé en ligne.</p>
						<img src='/images/paiements.webp' alt='Moyen de paiement' width={326} height={102} />
					</div>
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
