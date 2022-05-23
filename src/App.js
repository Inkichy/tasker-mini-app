import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { createStore } from 'redux'
import {
	View,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol, ScreenSpinner,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import MainPage from './panels/MainPage/MainPage';
import Modals from "./panels/MainPage/modals/Modals";

// setActiveModal(activeModal) {
// 	activeModal = activeModal || null;
// 	let modalHistory = this.state.modalHistory
// 		? [...this.state.modalHistory]
// 		: [];
//
// 	if (activeModal === null) {
// 		modalHistory = [];
// 	} else if (modalHistory.indexOf(activeModal) !== -1) {
// 		modalHistory = modalHistory.splice(
// 			0,
// 			modalHistory.indexOf(activeModal) + 1
// 		);
// 	} else {
// 		modalHistory.push(activeModal);
// 	}
//
// 	this.setState({
// 		activeModal,
// 		modalHistory,
// 	});
// }

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('tasks');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		// bridge.subscribe(({ detail: { type, data }}) => {
		// 	if (type === 'VKWebAppUpdateConfig') {
		// 		setScheme(data.scheme)
		// 	}
		// });

		async function fetchData() {
			// const user = await bridge.send('VKWebAppGetUserInfo');
			// setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					{/*popout={popout}*/}
					<SplitLayout modal={<Modals />}>
						<SplitCol>
							<View activePanel={activePanel}>
								<MainPage id={'tasks'} data={fetchedUser}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
