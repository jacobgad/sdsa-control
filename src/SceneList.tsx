import { useQuery } from 'react-query';
import obs from './lib/obs';
import { Button } from './components/ui/button';

export default function SceneList() {
	const { data } = useQuery(['GetSceneList'], () => obs.call('GetSceneList'));

	return (
		<ul>
			{data?.scenes.map(({ sceneName }) => (
				<li key={sceneName?.toString()}>
					<Button disabled={sceneName === data.currentProgramSceneName}>
						{sceneName?.toString()}
					</Button>
				</li>
			))}
		</ul>
	);
}
