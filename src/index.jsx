import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import AppRoutes from './routes/Routes'
import {store, persistor} from './store/store.js'
import './index.css'
import './normalaiz.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

/* включаем мок-запросы для тестирования api из файла AppTest/mocks/browser.js */
async function enableMocking() {
	
	/*
	* Переменная IS_MOCKING отвечает за включение и выключение мок-запросов.
	* Если IS_MOCKING = true, то мок-запросы включены.
	* Если IS_MOCKING = false, то мок-запросы выключены.
	 */
	const IS_MOCKING = false
	
	if (IS_MOCKING) {
		const {worker} = await import('./AppTest/mocks/browser')
		return worker.start()
	}
}

enableMocking().then(() => {
	
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppRoutes/>
				</PersistGate>
			</Provider>
		</React.StrictMode>
	)
})

