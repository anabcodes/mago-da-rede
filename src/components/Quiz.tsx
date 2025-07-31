import { useState } from "react";
import { useDispatch } from "react-redux";
import { setScreen } from "../features/screen/screenSlice";

function Quiz(){
    const questions = [
        {
            description: "Como está o clima aí agora?",
            choices: ["Ensolarado", "Nublado", "Chuvoso", "Frio"],
        },
        {
            description: "O lugar onde você está tem mais...",
            choices: ["Natureza", "Prédios", "Fazendas", "Praia"],
        },
        {
            description: "O ritmo por aí é mais...",
            choices: ["Parado", "Agitado", "Tranquilo", "Caótico"],
        }
    ]

    let [currentQuestion, setCurrentQuestion] = useState(0);

    const dispatch = useDispatch();

    function handleQuestion(){
        if(currentQuestion == 0 || currentQuestion < 2){
            setCurrentQuestion(currentQuestion +1)
        } 
        else{
            dispatch(setScreen('reveal'))
        }
    }

    return(
        <>
        <section className="flex flex-col container spacing place-self-center justify-center items-center h-[100vh] mt-7">
            <div className="bg-primary flex flex-col gap-5 p-10 border-6 border-second rounded-2xl relative min-w-[250px] max-w-[400px]">
                <div className="border-6 border-second bg-black rounded-full w-30 h-30 absolute -top-1/6 self-center overflow-hidden">
                    <img src="/mago-da-rede.png" alt="" />
                </div>
                <p className="text-second text-2xl text-center flex flex-col mt-6">{questions[currentQuestion].description}</p>
                <ul className="text-second text-2xl flex flex-col gap-4">
                    {questions[currentQuestion].choices.map((choice, index)=> {
                    return(  
                        <li className="py-2 px-10 bg-tertiary rounded-2xl text-center" onClick={handleQuestion} key={index}>
                            {choice}
                        </li>
                    )
                })}
                </ul>
            </div>
            <div className="flex mt-6 gap-3">
                <div className="w-15 h-2 rounded-2xl bg-second"></div>
                <div className={`w-15 h-2 rounded-2xl ${currentQuestion >=1 ? "bg-second" : "bg-neutral-800"}`}></div>
                <div className={`w-15 h-2 rounded-2xl ${currentQuestion == 2 ? "bg-second" : "bg-neutral-800"}`}></div>
            </div>
        </section>
        </>
    )
}

export default Quiz;