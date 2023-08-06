import { useMutation, useQueryClient } from 'react-query';
import { Button } from './components/ui/button';
import obs from './lib/obs';

type SceneListProps = {
	scenes: string[];
	currentProgramScene: string;
};

export default function SceneList({ scenes, currentProgramScene }: SceneListProps) {
	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: (sceneName: string) => obs.call('SetCurrentProgramScene', { sceneName }),
		onSuccess: () => {
			queryClient.invalidateQueries(['GetSceneList']);
			queryClient.invalidateQueries(['GetSourceScreenshot']);
		},
	});

	return (
		<ul className="grid grid-cols-3 gap-2">
			{scenes.map((scene) => (
				<li key={scene}>
					<Button
						disabled={scene === currentProgramScene}
						onClick={() => mutate(scene)}
						className="w-full"
					>
						{scene}
					</Button>
				</li>
			))}
		</ul>
	);
}
