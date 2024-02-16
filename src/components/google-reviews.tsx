import {component$} from '@builder.io/qwik';
import GoogleReviewCard from './google-review-card';

export default component$(() => {
	return (
		<section class="w-full p-12 flex flex-col items-center justify-center gap-8">
			<h2 class="flex flex-row gap-4 text-2xl md:text-5xl font-extrabold">
				{/* eslint-disable-next-line max-len */}
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
				<p>Avis Clients <span class="text-primary">CODET</span> <span class="text-secondary">DOG</span></p>
			</h2>
			<p class="text-4xl font-extrabold flex flex-row gap-4">
				4,5
				{ /* eslint-disable-next-line max-len */ }
				<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 32 32"><path fill="#FCD53F" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"/></svg>
				{ /* eslint-disable-next-line max-len */ }
				<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 32 32"><path fill="#FCD53F" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"/></svg>
				{ /* eslint-disable-next-line max-len */ }
				<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 32 32"><path fill="#FCD53F" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"/></svg>
				{ /* eslint-disable-next-line max-len */ }
				<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 32 32"><path fill="#FCD53F" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"/></svg>
				{ /* eslint-disable-next-line max-len */ }
				<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 32 32"><path fill="#FCD53F" d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"/></svg>
			</p>
			<div />

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-8">
				<GoogleReviewCard
					name='Charlene Hrd'
					// eslint-disable-next-line max-len
					content="J'ai contacté Étienne car j'avais des difficultés avec mon berger blanc suisse (tire en laisse, problème de rappel...).Étienne est un éducateur humain, sérieux et consciencieux que je recommande. En plus de renforcer l'éducation, nous avons pu expérimenter le cani CROSS, cani VTT et même l'Agility !Bonne continuation à toi Étienne et peut être a une prochaine !" />
				<GoogleReviewCard
					name='Emma Garcia'
					// eslint-disable-next-line max-len
					content="Les séances individuelles on été efficaces pour apprendre les ordres de bases et surtout le rappel à notre Chiot Samoyède. Les séances collectives étaient très intéressantes également. L'éducateur est dynamique et bienveillant, pleins de bons conseils. Merci." />
				<GoogleReviewCard
					name='Matthieu Persico'
					// eslint-disable-next-line max-len
					content="J'ai eu des séance avec Mr Etienne. celui-ci a réussi très rapidement a trouvée les problèmes de mon chien agressif; en un nombre diffèrent de séance et de temps comparée a ses confère il a réussi a réglé avec aisance les problèmes de mon chien qui depuis nous change la vie. Encore un grand merci a lui." />
			</div>
			<a
				class="text-secondary text-xl font-bold"
				// eslint-disable-next-line max-len
				href="https://www.google.com/search?q=codet+dog&oq=codet+dog&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPdIBCDExMTZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x480661dcfc53be6f:0x9e1b5819a0bd551f,1,,,,"
				target="_blank"
				rel="noreferrer"
			>Vois plus d'avis</a>
		</section>
	);
});
