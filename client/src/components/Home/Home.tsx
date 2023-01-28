import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export interface HomeProps{}

const Home: React.FC<HomeProps> = ()=>{
    const navigate = useNavigate()
    return (
    <div>
        <h1>Welcome to Learning App</h1>
        <p>Chose the quiz you want</p>
        <button onClick={()=> navigate('/RandomQuiz')}>Random Quiz</button>
        <Link to='/About'>About</Link>
    </div>)
}

export default Home