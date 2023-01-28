import React, { useState } from "react";
import { FormInputStyle, FormStyleTextArea } from "./Form.style";

export interface FormProps{
//     email:string
// question:string
// answer1:string
// answer2:string
// answer3:string
// answer4:string
// description:string
}

const Form:React.FC<FormProps> = () =>{
    const [inputValues, setInputValues]=useState<FormProps>({
        email:'',
        question:'',
        answer1:'',
        answer2:'',
        answer3:'',
        answer4:'',
        description:'',
    })
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        // e.preventDefault()
        
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>)=>{
        setInputValues({
            ...inputValues,
            [e.target.name]:e.target.value
        })

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <FormInputStyle>

                    <input onChange={handleChange} type={'text'} name={'email'} placeholder={'Email'}/>
                    <input onChange={handleChange} type={'text'} name={'question'} placeholder={'Question'}/>
                    <input onChange={handleChange} type={'text'} name={'answer1'} placeholder={'Answer 1'}/>
                    <input onChange={handleChange} type={'text'} name={'answer2'} placeholder={'Answer 2'}/>
                    <input onChange={handleChange} type={'text'} name={'answer3'} placeholder={'Answer 3'}/>
                    <input onChange={handleChange} type={'text'} name={'answer4'} placeholder={'Answer 4'}/>
                    {/* <FormStyleTextArea> */}
                        <textarea onChange={handleChange} name={'description'} placeholder={'Please, type a short explaining'}/>
                    {/* </FormStyleTextArea> */}
                    <button>Send to check</button>
                </FormInputStyle>
            </form>
        </div>
    )
}

export default Form