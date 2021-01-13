import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import AuthorPage from "./components/AuthorPage/AuthorPage";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
      <div style={{backgroundColor:"#282c34",height:"1000px"}}>
          <BrowserRouter>
              <Route exact path={'/'}
                     render={()=><MainPage/>}/>
              <Route  path={'/Author'}
                      render={()=><AuthorPage/>}/>
              <Route  path={'/Search'}
                      render={()=><SearchPage/>}/>
          </BrowserRouter>
      </div>
  );
}

export default App;
