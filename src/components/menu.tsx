import {component$, useSignal} from '@builder.io/qwik';
import cx from 'classnames';

interface IRoute {
	name: string;
	href: string;
}

const routes: IRoute[] = [
	{
		name: 'Accueil',
		href: '/',
	},
	{
		name: 'Fontionnement',
		href: '/fonctionnement',
	},
	{
		name: 'Qui suis-je',
		href: '/quijesuis',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
];

export default component$(() => {
	const showSlider = useSignal<boolean>(false);

	return (
		<>
			<header
				class="
					fixed top-0
					w-full h-32
					py-8 px-8
					flex justify-end md:justify-center items-center gap-32
					z-40 bg-black font-bold text-2xl
			">
				<a href="/" class="absolute top-4 left-4 h-24">
					<img src="/images/logo.webp" width={197} height={48} alt="Website's logo" style={{
						width: 'auto',
						height: '100%',
					}}/>
				</a>
				{routes.map((route, index) =>
					<a class="hidden md:block" href={route.href} key={index}>{route.name}</a>)
				}
				<button
					class="block md:hidden"
					onClick$={() => showSlider.value = true}
				>
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16M4 6h16M4 18h16"/></svg>
				</button>
			</header>
			<div class={cx(
				showSlider.value ? 'translate-x-0' : 'translate-x-full',
				'fixed top-0 right-0 min-w-[400px] h-full flex flex-col',
				'bg-black shadow-2xl shadow-black z-50',
				'duration-300',
			)}>
				<button
					class="w-fit px-4 py-4"
					onClick$={() => showSlider.value = false}
				>
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>
				</button>
				{routes.map((route, index) =>
					<a href={route.href} key={index} class={cx(
						'relative !py-4 text-white text-center text-2xl hover:bg-primary',
						'after:content-[\'\'] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[90%] after:h-1',
						'after:bg-primary',
					)}
					onClick$={() => showSlider.value = false}
					>
						{route.name}
					</a>,
				)}
			</div>
		</>
	);
});
