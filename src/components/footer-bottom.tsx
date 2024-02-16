import {component$} from '@builder.io/qwik';

export default component$(() => {
	return (
		<ul class="flex flex-col md:flex-row gap-6">
			<li><a>Mentions légales</a></li>
			<li><a>Conditions d'utilisation</a></li>
		</ul>
	);
});
