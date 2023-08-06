import { useQuery } from 'react-query';
import obs from './lib/obs';

type SourceScreenshotProps = {
	sourceName: string;
};

export default function SourceScreenshot({ sourceName }: SourceScreenshotProps) {
	const { data } = useQuery({
		queryKey: ['GetSourceScreenshot', sourceName],
		queryFn: () =>
			obs.call('GetSourceScreenshot', {
				sourceName,
				imageFormat: 'png',
			}),
		refetchInterval: 3000,
	});

	return <img src={data?.imageData} alt="CurrentProgramScene" className="h-60" />;
}
