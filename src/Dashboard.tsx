import SceneList from './SceneList';
import SourceScreenshot from './SourceScreenshot';
import StreamingButton from './StreamingButton';
import obs from './lib/obs';
import { useQuery } from 'react-query';

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
			<StreamingButton />
		</>
	);
}
