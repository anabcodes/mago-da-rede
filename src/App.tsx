import { useSelector } from 'react-redux'
import Quiz from "./components/Quiz";
import Reveal from "./components/Reveal";
import Intro from "./components/Intro";
import Explanation from "./components/Explanation";
import Footer from "./components/Footer";
import type { RootState } from "./app/store";
import { useEffect } from 'react';

function App(){

    const currentScreen = useSelector((state: RootState) => state.screen.current);

    useEffect(() => {
    window.scrollTo({ top: 0});
  }, [currentScreen]);

    
    return(
        <>
        {
            currentScreen ==  'intro' && (
                <Intro/>
            )
        }

        {
            currentScreen == 'quiz' && (
                <Quiz/>
            )
        }

        {
            currentScreen == 'reveal' && (
                <Reveal/>
            )
        }

        {
            currentScreen == 'explanation' && (
                <Explanation/>
            )
        }
        
        <Footer/>
        </>
    )
}

export default App;