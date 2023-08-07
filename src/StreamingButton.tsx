import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';
import obs from './lib/obs';
import { useMutation } from 'react-query';

export default function StreamingButton() {
	const [isActive, setIsActive] = useState(false);

	const { mutate, isLoading } = useMutation({
		mutationFn: () => obs.call('ToggleStream'),
	});

	useEffect(() => {
		obs.addListener('StreamStateChanged', (a) => {
			setIsActive(a.outputActive);
		});

		return () => {
			obs.removeListener('StreamStateChanged');
		};
	}, []);

	return (
		<Button
			variant={isActive ? 'destructive' : 'default'}
			onClick={() => mutate()}
			disabled={isLoading}
			className="w-full flex gap-2"
		>
			{isActive ? 'Stop' : 'Start'} Streaming
			{isActive ? <StopCircleIcon /> : <PlayCircleIcon />}
		</Button>
	);
}
