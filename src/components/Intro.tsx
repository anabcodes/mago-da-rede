import { useDispatch } from 'react-redux';
import { setScreen } from '../features/screen/screenSlice'

function Intro(){
    const dispatch = useDispatch();

    return(
        <>
        <section className="flex flex-col gap-6 container spacing place-self-center justify-center items-center h-[100vh]">
            <h1 className="text-second text-4xl text-center font-bold">Eu, vou adivinhar aonde você está!</h1>
            <p className="text-center">Só precisa me responder três perguntas, e eu adivinho aonde você está! Dúvida?</p>
            <div className="w-full h-75 bg-contain bg-center bg-no-repeat flex justify-center items-center" style={{ backgroundImage: "url('/galaxy.png')" }}>
            <img className="h-full object-cover" src="/mago-da-rede.png" alt="" />
            </div>
            <button className="text-3xl bg-primary text-second  py-4 px-10 border-5 rounded-3xl font-bold" onClick={() => dispatch(setScreen('quiz'))}>Me desafie!</button>
        </section>
        </>
    )
}

export default Intro;