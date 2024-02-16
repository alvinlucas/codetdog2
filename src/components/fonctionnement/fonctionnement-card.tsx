import {component$} from '@builder.io/qwik';
import Button from '../button';

export interface IFonctionnement {
	slug: string,
	title: string,
	summary: string,
	duration?: string,
	price?: string,
	calendly?: string,
}

export default component$<IFonctionnement>((props: IFonctionnement) => {
	return (
		<section class="
			w-full flex flex-col px-6 py-12 gap-8
			bg-neutral rounded-md
		">
			<div class="w-full flex flex-row items-center gap-4">
				<img src='/images/logo-dog.webp' alt='Logo chien' width={49} height={49} />
				<h2 class="text-xl md:text-3xl font-extrabold">{props.title}</h2>
			</div>
			<div class="pl-16">
				<Button href={`/fonctionnement/${props.slug}`}>En savoir plus</Button>
			</div>
		</section>
	);
});
