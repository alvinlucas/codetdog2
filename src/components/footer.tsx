import {component$} from '@builder.io/qwik';
import Button from './button';
import FooterBottom from './footer-bottom';

export default component$(() => {
	return (
		<footer class="
			w-full
			pt-20 pb-8 px-8
			flex flex-col items-center gap-6 md:gap-14
			text-center
			2xl:bg-footer bg-right-bottom bg-no-repeat
		">
			<h2 class="text-5xl font-extrabold"><span class="text-primary">CODET</span><span class="text-secondary">DOG</span></h2>
			<h2 class="text-2xl md:text-4xl">Ouvert du Lundi au Samedi de 9h00 - 20h00</h2>
			<div class="h-4" />
			<Button href='tel:+33783659180'>07 83 65 91 80</Button>
			<div class="h-6" />

			<FooterBottom />
		</footer>
	);
});
