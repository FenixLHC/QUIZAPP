import axios from 'axios'
import { shuffleArray } from './components/utils';

export const urlApi='https://opentdb.com/api.php'

export enum Difficulty{
    EASY='easy',
    MEDIUM='medium',
    HARD='hard'
}
export type Question={
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;
}

export type QuestionState = Question & {answers:string[]}

export const fetchQuizQuestions = async (
    amount:number,
    difficulty:Difficulty
    ) =>{
    const endPoint = `${urlApi}?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const response = await axios(endPoint)
    return response.data.results.map((question:Question)=>(
        {
            ...question,
            answers:shuffleArray([...question.incorrect_answers,question.correct_answer])
        }
    ))
    }