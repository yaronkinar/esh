import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import SinglePost from "./components/SinglePost.tsx";
/*import {useEffect} from "react";
import {useAppSelector} from "./hooks.ts";*/
import {LanguageProvider} from "./LanguageContext.tsx";

function App() {
    const theme = useTheme();
    const {i18n} = useTranslation();
    /*
        const lang = useAppSelector((state) => state.blog.language);
    */
    /*  console.log(lang)
      let dir1 = lang?.language === "en" ? "ltr" : "rtl";
      document.body.dir = dir1;
      theme.direction = i18n.dir();
     useEffect(() => {
          const dir = dir1;
          document.body.dir = dir;
      }, [i18n, i18n.language,dir1]);*/
    return (
        <LanguageProvider>
            <Router>
                <Navbar/>

                <main className={"main flex  m-auto text-black"}>

                    <Routes>
                        <Route path="/"  element={<Home/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/post/:slug" element={<SinglePost/>}/>
                    </Routes>

                </main>

                <Footer/>
            </Router>
        </LanguageProvider>

    );
}

export default App;
