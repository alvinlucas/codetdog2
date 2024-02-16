import {Slot, component$} from '@builder.io/qwik';
import cx from 'classnames';

interface IButtonProps {
	href?: string;
	class?: string;
	type?: 'button' | 'submit' | 'reset';
    buttonStyle?: 'primary' | 'secondary';
	onClick?: () => void;
}

export default component$<IButtonProps>((props) => {
	let className = cx(
		'w-fit px-6 md:px-12 py-2 duration-300 rounded-md text-lg md:text-3xl font-extrabold text-center',
		props.class,
	);

	if (props.buttonStyle == 'secondary') {
		className = cx(className, 'bg-white text-primary hover:bg-primary-dark hover:text-white');
	} else {
		className = cx(className, 'bg-primary hover:bg-primary-dark');
	}

	return props.href ? (
		<a class={className} href={props.href}>
			<Slot />
		</a>
	) : (
		<button
			class={className}
			type={props.type}
			onClick$={props.onClick}
		>
			<Slot />
		</button>
	);
});
