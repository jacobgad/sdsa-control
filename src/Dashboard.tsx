import { useQuery } from 'react-query';
import SourceScreenshot from './SourceScreenshot';
import SceneList from './SceneList';
import obs from './lib/obs';

export default function Dashboard() {
	const { data } = useQuery({
		queryKey: ['GetSceneList'],
		queryFn: () => obs.call('GetSceneList'),
	});

	const currentProgramSceneName = data ? data.currentProgramSceneName : '';
	const scenes = data ? data.scenes.map(({ sceneName }) => String(sceneName)).sort() : [];

	return (
		<>
			{data && <SourceScreenshot sourceName={data.currentProgramSceneName} />}
			<SceneList scenes={scenes} currentProgramScene={currentProgramSceneName} />
		</>
	);
}
