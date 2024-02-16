import {component$} from '@builder.io/qwik';

export interface IDogIssue {
	type: string
	imageSrc: string
	title: string
	text: string
}

export default component$<IDogIssue>((props) => {
	return (
		<article class="
			w-full
			flex flex-row
			border border-white rounded-md
		">
			<img
				src={props.imageSrc}
				alt={`Problème ${props.title}`}
				width={604} height={454}
				class="w-1/3 h-full object-cover" />
			<div class="w-full h-full px-6 md:px-14 py-4 md:py-8 flex flex-col justify-center gap-2 md:gap-6">
				<h3 class="text-xl md:text-3xl font-extrabold">{props.title}</h3>
				<p>{props.text}</p>
			</div>
		</article>
	);
});
