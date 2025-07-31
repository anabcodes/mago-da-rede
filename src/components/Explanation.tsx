import { useEffect, useState } from "react";

function Explanation(){

    const [ip, setIp] = useState('');

    useEffect(() => {
        async function fetchIp() {
            try{
                const request = await fetch("https://ipinfo.io/json?");

                const jsonResponse = await request.json();

                setIp(jsonResponse.ip)
            } catch(error){
                console.error("Erro ao buscar IP");
            }
        }

        fetchIp();
    }, [])


    return(
        <>
        <section className="flex flex-col gap-6 container spacing place-self-center justify-center items-center relative">
            <div className="max-w-3xl flex flex-col gap-8 text-base leading-relaxed">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-second">
            Os Segredos do Mago da Rede
          </h1>
          <p className="mt-2 text-lg text-white">
            Como eu descobri onde você está...
          </p>
        </header>

        {/* Passo 1 */}
        <article className="flex flex-col gap-3">
          <h2 className="text-blue-500 text-2xl font-semibold">
            Passo 1: Toda magia começa com um endereço...
          </h2>
          <p>
            Quando você acessa a internet, o seu dispositivo precisa de uma identidade temporária para conversar com outros. Essa identidade é chamada de <span className="text-second font-semibold">endereço IP</span>.
          </p>
          <p>No seu caso, seu IP é esse aqui:</p>
          <div className="bg-neutral-900 text-green-400 font-mono p-4 rounded-xl text-sm overflow-x-auto">
            <code>{ip}</code>
          </div>
          <p className="text-neutral-400 italic">(E sim, os sites conseguem ver isso!)</p>
          <p>Mas por quê?</p>
          <p>
            Porque, para navegar na internet, você precisa enviar e receber dados. E, pra isso funcionar, o servidor precisa saber quem é o remetente e quem é o destinatário desses dados, para isso ele usa o endereço IP.
          </p>
        </article>

        {/* Passo 2 */}
        <article className="flex flex-col gap-3">
          <h2 className="text-blue-500 text-2xl font-semibold">
            Passo 2: IPs estão ligados a lugares reais
          </h2>
          <p>“Ah, mas IP não é só um número aleatório?”</p>
          <p>
            Não, jovem aprendiz. Os IPs são distribuídos por região, por empresas chamadas <span className="text-second font-semibold">provedores de internet (ISPs)</span>.
          </p>
          <p>Como funciona essa magia:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cada provedor recebe faixas de IPs (ex: de 201.0.0.0 até 201.255.255.255)</li>
            <li>Essas faixas são usadas em determinadas cidades, estados ou regiões</li>
            <li><em>Serviços de localização observam: “Hmm... esses IPs aqui aparecem sempre em Fortaleza.”</em></li>
          </ul>
          <p className="italic text-sm text-neutral-400">
            Isso não é tão preciso quanto GPS, é apenas uma estimativa baseada no histórico daquele IP.
          </p>
        </article>

        {/* Passo 3 */}
        <article className="flex flex-col gap-3">
          <h2 className="text-blue-500 text-2xl font-semibold">
            Passo 3: Existem grimórios que guardam esses dados
          </h2>
          <p>Agora entra o meu truque favorito:</p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-300">
            “Eu uso um grande grimório digital chamado API de Geolocalização por IP.”
          </blockquote>
          <p>Um dos mais usados é o <span className="text-second font-semibold">IPinfo</span>.</p>
          <p>Ele mantém um banco de dados mágico com milhões de IPs associados às suas localizações.</p>
          <p>Quando eu envio um IP pra esse serviço, ele me devolve coisas como:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cidade</li>
            <li>Estado/Região</li>
            <li>País</li>
            <li>Coordenadas aproximadas</li>
            <li>Provedor de internet</li>
          </ul>
        </article>

        {/* Passo 4 */}
        <article className="flex flex-col gap-3">
          <h2 className="text-blue-500 text-2xl font-semibold">
            Passo 4: A consulta acontece em segundos!
          </h2>
          <p>“Assim que você entrou no meu site, eu capturei seu IP e fiz uma consulta rápida à API.”</p>
          <p>A base da consulta é por meio dessa linha simples:</p>
          <div className="bg-neutral-900 text-green-400 font-mono p-4 rounded-xl text-sm overflow-x-auto">
            <code>https://ipinfo.io/json</code>
          </div>
          <p>Só com essa linha, se você copiar e colar na internet. Já consegue ver as informações ligadas ao seu IP.</p>
          <p>A resposta vem mais ou menos assim:</p>
          <div className="bg-neutral-900 text-green-400 font-mono p-4 rounded-xl text-sm overflow-x-auto">
            <pre>
              {`{
  "ip": "201.17.23.45",
  "city": "Recife",
  "region": "PE",
  "country": "BR",
  "loc": "-8.0476,-34.8770",
  "org": "AS28573 CLARO S.A.",
  "timezone": "America/Recife"
}`}
            </pre>
          </div>
        </article>

        {/* Passo 5 */}
        <article className="flex flex-col gap-3">
          <h2 className="text-blue-500 text-2xl font-semibold">
            Passo 5: Isso é perigoso?
          </h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-300">
            “Não se preocupe, jovem aprendiz. Essa magia é poderosa, mas não tão invasiva.”
          </blockquote>
          <p>É importante entender o que essa mágica pode e não pode fazer:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ela não revela seu endereço exato.</li>
            <li>A localização obtida é apenas aproximada, com base em onde aquele IP costuma ser usado.</li>
            <li>Às vezes acerta sua cidade. Outras vezes, mostra uma região próxima ou até o estado vizinho.</li>
            <li>Mesmo assim, é bom saber que muitos sites usam essa técnica sem te avisar.</li>
          </ul>
          <p className="italic text-sm text-neutral-400">
            Saber disso te torna mais consciente e mais protegido no mundo mágico da internet.
          </p>
        </article>

        {/* Moral da história */}
        <article className="flex flex-col gap-4 border-t border-neutral-800 pt-6">
          <h2 className="text-second text-2xl font-bold">🔮 Moral da história</h2>
          <p className="text-lg leading-relaxed">
            Você achou que as perguntas mágicas tinham revelado seu paradeiro...
            <br />
            <strong>Mas era o seu IP o tempo todo!</strong>
          </p>
          <p>
            A verdadeira mágica está nos bastidores da tecnologia!
          </p>
        </article>
      </div>
    </section>

        </>
    )
}

export default Explanation;