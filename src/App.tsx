import Routes from './routes/sections/index'
import './App.css'
import ThemeProvider from './theme'

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App
