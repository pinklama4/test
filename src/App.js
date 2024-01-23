import MainPages from "./pages/MainPages/MainPages";
import style from './styles/index.module.scss'
import Playbar from "./components/Playbar/Playbar";



function App() {
  return (
      <div className={style.wrapper}>
          <MainPages/>
          <Playbar/>
      </div>
  );
}

export default App;
