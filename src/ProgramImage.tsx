import { useQuery } from 'react-query';
import obs from './lib/obs';

export default function ProgramImage() {
	const { data } = useQuery(['GetCurrentProgramScene'], () =>
		obs.call('GetSourceScreenshot', {
			sourceName: 'Desktop',
			imageFormat: 'png',
		})
	);

	return <img src={data?.imageData} alt="CurrentProgramScene" />;
}
