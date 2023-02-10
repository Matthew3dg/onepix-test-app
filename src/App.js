import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuContent from './components/MenuContent/MenuContent';
import MainScreen from './screens/MainScreen/MainScreen';
import MenuScreen from './screens/MenuScreen/MenuScreen';

function App() {
	return (
		<div id="burger">
			<MainScreen />
			<MenuScreen>
				<Header />
				<MenuContent />
				<Footer />
			</MenuScreen>
		</div>
	);
}

export default App;
