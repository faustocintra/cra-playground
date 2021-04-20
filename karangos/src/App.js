import './App.css';
import AppHeader from './ui/AppHeader'
import AppFooter from './ui/AppFooter'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { yellow, pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: pink[500],
    },
    type: 'dark'
  },
});

function App() {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <AppFooter />
    </ThemeProvider>
  );
}

export default App;
