import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import SinglePost from "./components/SinglePost.tsx";
/*import {useEffect} from "react";
import {useAppSelector} from "./hooks.ts";*/
import {LanguageContext, LanguageProvider} from "./LanguageContext.tsx";
import {useContext, useEffect} from "react";

function App() {
    const { currentLanguage } = useContext(LanguageContext);
    /*
        const lang = useAppSelector((state) => state.blog.language);
    */
     console.log(currentLanguage)
      const dir1 = currentLanguage === "en" ? "ltr" : "rtl";


     useEffect(() => {
         document.body.dir = dir1;
      }, [currentLanguage,dir1]);
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
