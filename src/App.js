import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/topbar/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { createContext, useState } from "react";
export const ThemeContext = createContext("null");

function App() {
	const [theme, setTheme] = useState({});
	const [fontSize, setFontSize] = useState(16);

	const toggleTheme = () => {
		setTheme(curr => (curr === "light" ? "dark" : "light"));
	};

	function increaseFontSize() {
		setFontSize(fontSize + 2);
	}

	function decreaseFontSize() {
		setFontSize(fontSize - 2);
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className='App' id={theme} style={{ fontSize: `${fontSize}px` }}>
				<Topbar onButtonClick={toggleTheme} checked={theme === "dark"} />
				<div className='container'>
					<Sidebar
						onDecreaseFontSize={decreaseFontSize}
						onIncreaseFontSize={increaseFontSize}
					/>
					<Home />
				</div>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
