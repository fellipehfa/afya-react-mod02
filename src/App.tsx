import Routes from "./routes"
import GlobalStyles from "./assets/GobalStyles"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;