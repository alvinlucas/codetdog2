import {component$} from '@builder.io/qwik';
import Button from '~/components/button';
import FooterBottom from '~/components/footer-bottom';

export default component$(() => {
	return (
		<>
			<main class="w-full flex flex-col items-center pt-16">
				<h1 class="text-2xl md:text-7xl font-extrabold">Contacter <span class="text-primary">CODET</span><span class="text-secondary">DOG</span></h1>
				<Button class="my-12" href='tel:+33783659180'>07 83 65 91 80</Button>
				<p class="w-full text-center pt-16 text-xl md:text-5xl">Ouvert du Lundi au Samedi de 9h00 - 20h00</p>
				<div class="w-full flex flex-row justify-end pr-16">
					<img src='/images/quijesuis-dog.webp' alt='Chien Google Map' width={407} height={224} />
				</div>
				{ /* eslint-disable-next-line max-len */}
				<iframe class="w-full px-12 pb-16" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.89125871556!2d-1.342659127716454!3d47.140396420060604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480661dcfc53be6f%3A0x9e1b5819a0bd551f!2sCODETDOG%20-%20Educateur%20Comportementaliste%20canin!5e0!3m2!1sen!2sfr!4v1688043527206!5m2!1sen!2sfr" width="600" height="450" style="border:0;" loading="lazy"></iframe>
			</main>
			<footer class="py-16 w-full flex flex-col items-center gap-10 text-bold">
				<FooterBottom />
			</footer>
		</>
	);
});
