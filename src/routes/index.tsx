import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import Button from '~/components/button';
import Footer from '~/components/footer';
import GoogleReviews from '~/components/google-reviews';
import Section1 from '~/components/section1/section1';
import Section2 from '~/components/section2/section2';
import Section3 from '~/components/section3/section3';

export default component$(() => {
	return (
		<>
			<main class="w-full flex flex-col items-center">
				<Section1 />
				<Section2 />
				<Section3 />
				<div class="w-full flex flex-col justify-center items-center gap-12 p-16">
					<h2 class="text-2xl md:text-5xl font-extrabold">Nous avons des solutions</h2>
					<Button href='/fonctionnement'>Découvrir nos méthodes</Button>
				</div>
				<GoogleReviews />
				<h2 class='text-xl md:text-5xl font-extrabold py-8'>
					" Le décoder c'est l'éduquer "
				</h2>
			</main>
			<Footer />
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
