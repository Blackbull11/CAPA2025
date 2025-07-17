import Countdown from './components/Countdown';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wip from './pages/WorkInProgress';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Calendrier from './pages/Calendrier';
import Equipe from './pages/Equipe';
import Infos from './pages/Infos';
import Douai from './pages/Douai';
import WrongRoute from './components/WrongRoute';
import Alert from './components/Alert';
import { ThemeProvider } from './contexts/ThemeContext';
import { AlertProvider } from './contexts/AlertContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assos from './pages/Assos';
import QuestionnaireToast from './components/QuestionnaireToast';
import Wei from './pages/Wei';



function App() {
  
	return (
		<>
		<Router>
			<ThemeProvider>
			<AlertProvider>
				<Countdown />
				<Navbar/>
				<Routes>
					<Route exact path='/' element={<Home/>} />
					<Route exact path="/wei" element={<Wei />} />
					<Route exact path='/infos' element={<Infos />} />
					<Route exact path='/videos' element={<Videos />} />
					<Route exact path='/douai' element={<Douai />} />
					<Route exact path='/assos' element={<Assos />} />
					<Route exact path='/calendrier' element={<Calendrier />} />
					<Route exact path='/equipe' element={<Equipe />} />
					<Route exact path='/classement' element={<Wip pageName='/Classement'/>} />
					<Route exact path='/wei' element={<Wip pageName='/WEI'/>} />
					<Route exact path='/contact' element={<Contact />} />
					<Route path="*" element={<WrongRoute />} />
				</Routes>
				<Footer/>
				<QuestionnaireToast />
				<Alert />
			</AlertProvider>
			</ThemeProvider>
		</Router>
		</>
	)
}

export default App
