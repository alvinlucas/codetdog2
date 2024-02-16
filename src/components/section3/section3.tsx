import {component$, useSignal} from '@builder.io/qwik';
import cx from 'classnames';
import IssueCard from './issue-card';
import {dogsIssues} from '~/utils/issues';

export default component$(() => {
	const focusedIssueType = useSignal<string>('comportement');

	return (
		<section class="
			w-full max-w-7xl
			p-8 md:p-16
			flex flex-col items-center gap-6 md:gap-16
		">
			<h2 class="text-2xl md:text-5xl font-extrabold">Votre chien rencontre ce type de problème ?</h2>

			<div class="flex-col md:flex-row border border-white rounded-md flex">
				<button
					// eslint-disable-next-line max-len
					class={cx('w-[320px] py-2 px-6 rounded-md text-xl md:text-3xl font-extrabold text-center', focusedIssueType.value == 'comportement' && 'bg-primary')}
					onClick$={() => focusedIssueType.value = 'comportement'}
				>
					Comportement</button>
				<button
					// eslint-disable-next-line max-len
					class={cx('w-[320px] py-2 px-6 rounded-md text-xl md:text-3xl font-extrabold text-center', focusedIssueType.value == 'education' && 'bg-primary')}
					onClick$={() => focusedIssueType.value = 'education'}
				>
					Éducation
				</button>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
				{dogsIssues.map((issue, i) => {
					if (issue.type == focusedIssueType.value) {
						return (
							<IssueCard
								key={i}
								type={issue.type}
								imageSrc={issue.imageSrc}
								title={issue.title}
								text={issue.text} />
						);
					}
				})}
			</div>
		</section>
	);
});
