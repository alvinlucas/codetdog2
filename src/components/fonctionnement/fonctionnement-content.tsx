import {component$} from '@builder.io/qwik';
import EtudeComportement from './etude-comportement';
import SeanceEthologieCanine from './seance-ethologie-canine';
import SeanceIndividuelle from './seance-individuelle';
import CoursCollectifs from './cours-collectifs';
import BaladesEducatives from './balades-educatives';
import EveilDuChiot from './eveil-du-chiot';
import VisistePreAdoption from './visiste-pre-adoption';
import SportsCanins from './sports-canins';

interface IContentProps {
	slug: string
}

export default component$<IContentProps>((props: IContentProps) => {
	switch (props.slug) {
	case 'etude-comportement':
		return (<EtudeComportement />);
	case 'seances-ethologie-canines':
		return (<SeanceEthologieCanine />);
	case 'seances-individuelles':
		return (<SeanceIndividuelle />);
	case 'cours-collectifs':
		return (<CoursCollectifs />);
	case 'balades-education':
		return (<BaladesEducatives />);
	case 'eveil-du-chiot':
		return (<EveilDuChiot />);
	case 'visite-pre-adoption':
		return (<VisistePreAdoption />);
	case 'sports-canins':
		return (<SportsCanins />);
	default:
		return (<p>Contenue introuvable...</p>);
	}
});
