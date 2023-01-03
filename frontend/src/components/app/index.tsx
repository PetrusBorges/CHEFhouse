// Styled-Components
import { ThemeProvider } from 'styled-components';
import GlobalThemes from '../../assets/styles/global';
import { myTheme } from '../../assets/styles/default';

// Components
import { Header } from '../header';
import { Orders } from '../orders';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalThemes />
      <Header />
      <Orders />
      <ToastContainer position='bottom-center' />
    </ThemeProvider>
  );
}
