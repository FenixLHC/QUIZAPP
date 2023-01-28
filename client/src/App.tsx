import React from "react";
import { Route, Routes} from "react-router-dom";
import RandomQuiz from "./components/RandomQuiz/RandomQuiz";
import NavBar from './components/Nav/NavBar'
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import { FormProps } from "./components/Form/Form";

export interface AppProps{

}
const  App:React.FC<AppProps> = ()=>{
    return(
        <>
        <Routes>
            <Route  path={'/extra'} element={<RandomQuiz />}/>
            <Route path="/" element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path='RandomQuiz' element={<RandomQuiz />} />
                <Route path="/Form" element={<Form />} />
            </Route>
        </Routes>
        </>
    )
}

export default App