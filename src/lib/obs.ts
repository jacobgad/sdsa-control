/* eslint-disable no-console */

import OBSWebSocket, { OBSWebSocketError } from 'obs-websocket-js';

const obs = new OBSWebSocket();

try {
	const { obsWebSocketVersion, negotiatedRpcVersion } = await obs.connect(
		'ws://localhost:4455',
		'fAZmplv06CbEB1ox'
	);
	console.log(`Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`);
} catch (error) {
	if (error! instanceof OBSWebSocketError) {
		console.error('Failed to connect', error.code, error.message);
	}
}

export default obs;
