import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreen } from "../features/screen/screenSlice";

function Reveal(){
    const token = import.meta.env.VITE_IPINFO_TOKEN;

    const [locationData, setLocationData] = useState({
        city: '',
        region: '',
        latitude: '',
        longitude: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchLocation() {
            try {
                const request = await fetch(`https://ipinfo.io/json?token=${token}`);

                const jsonResponse = await request.json();

                const [latitude, longitude] = jsonResponse.loc.split(",");

                setLocationData({
                    city: jsonResponse.city,
                    region: jsonResponse.region,
                    latitude,
                    longitude
                });
            } catch (error) {
                console.error("Erro ao buscar localização:", error);
            }
        }

        fetchLocation();
    }, []);

    return(
        <>
        <section className="flex flex-col gap-6 container spacing place-self-center justify-center items-center relative h-[100vh]">
        <div className="-z-10 w-full h-100 top-0 absolute p-8 flex justify-center">
            <img className="h-full object-cover" src="/mago-da-rede.png" alt="" />
        </div>
        <div className="bg-primary flex flex-col gap-5 p-10 border-6 border-second rounded-2xl bottom-0 absolute m-8">
            <p className="text-second text-4xl text-center">Já sei onde você está!</p>
            <p className="text-default">
            Você está em {locationData.city || '...'}, {locationData.region || '...'}.
            </p>
            <p className="text-default">Suas coordenadas aproximadas são:</p>
            <p className="text-default">Latitude: {locationData.latitude || '...'}</p>
            <p className="text-default">Longitude: {locationData.longitude || '...'}</p>
        </div>
        </section> 
        <section className="flex flex-col gap-6 container spacing place-self-center justify-center items-center relative">
            <p className="text-2xl text-center">Ei, quer saber como fiz essa magia? <button onClick={() => dispatch(setScreen('explanation'))}  className="text-second ">Clica aqui que te conto!</button></p>
        </section>
        </>
    )
}
export default Reveal;