import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

interface TimeProps {
  nome: string;
  foto: string;
  linkedin: string;
  github: string;
}

function Apresentacao({ nome, foto, linkedin, github }: TimeProps) {
  return (
    // <>
    //   <div className="border border-orange-400 p-4 flex flex-col rounded-lg items-center bg-orange-100">
    //     <img
    //       src={foto}
    //       //src="https://cdn.playbuzz.com/cdn/913253cd-5a02-4bf2-83e1-18ff2cc7340f/c56157d5-5d8e-4826-89f9-361412275c35.jpg"
    //       className="w-1/2 rounded-full m-2"
    //     />
    //     <p className="text-base font-mono ">{nome}</p>
    //     <div className="flex gap-10">
    //       <a
    //         href={linkedin}
    //         target="_blank"
    //         className="hover:bg-blue-300 rounded-full"
    //       >
    //         <LinkedinLogo size={32} weight="duotone" />
    //       </a>
    //       <a
    //         href={github}
    //         target="_blank"
    //         className="hover:bg-purple-300 rounded-full"
    //       >
    //         <GithubLogo size={32} weight="duotone" />
    //       </a>
    //     </div>
    //   </div>
    // </>
    <>
<div className="aspect-auto w-full bg-gray-50 flex justify-center items-center">
  <div className="h-56 w-72 absolute flex justify-center items-center">
        <img
          className="w-1/4 m-2 rounded-full"
          src={foto}
          alt=""
        />
      </div>
      <div
        className="
        h-56
        mx-4
        w-5/6
        bg-orange-400
        rounded-3xl
        shadow-md
        sm:w-80 sm:mx-0
      "
      >
        <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
        </div>
        <div
          className="
          bg-white
          h-1/2
          w-full
          rounded-3xl
          flex flex-col
          justify-around
          items-center
        "
        >
          <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
            <div className="flex flex-col justify-center items-center">
                <a href={linkedin}>
                    <h1 className="text-gray-500 text-xs">Linkedin</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z" opacity="0.2"></path><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg></a>
            </div>
            <div className="flex flex-col justify-center items-center">
                <a href={github}>
                    <h1 className="text-gray-500 text-xs">Github</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z" opacity="0.2"></path><path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path></svg></a>
                    </div>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-center sm:text-center">
            <h1 className="text-gray-700 font-bold text-sm">{nome}</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function Turma() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-8 bg-slate-50/10">
        <h2 className="text-2xl font-bold"> Nosso Time </h2>
        <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-8 2xl:mx-32">
          <Apresentacao
            nome="Ana Eliza Oliveira"
            foto="https://avatars.githubusercontent.com/u/151927439?v=4"
            linkedin="https://www.linkedin.com/in/anaelizaqoliveira/"
            github="https://github.com/estudosdetidaana98"
          />
          <Apresentacao
            nome="Luciana Rocha"
            foto="https://avatars.githubusercontent.com/u/141670452?v=4"
            linkedin="https://www.linkedin.com/in/luciana-rocha-a37459b8/"
            github="https://github.com/lucianajrocha"
          />
          <Apresentacao
            nome="Matheus Libanio"
            foto="https://avatars.githubusercontent.com/u/71234348?v=4"
            linkedin="https://www.linkedin.com/in/matheus-libanio/"
            github="https://github.com/MatheusLib"
          />
          <Apresentacao
            nome="Rafael Venâncio"
            foto="https://avatars.githubusercontent.com/u/131331392?v=4"
            linkedin="https://www.linkedin.com/in/venancio-rafael/"
            github="https://github.com/doncob"
          />
          <Apresentacao
            nome="Samuel Ferreira"
            foto="https://avatars.githubusercontent.com/u/151537218?v=4"
            linkedin="https://www.linkedin.com/in/samuel-ferreira-da-silva/"
            github="https://github.com/samuelferreira25"
          />
          <Apresentacao
            nome="Yuri Henrick"
            foto="https://avatars.githubusercontent.com/u/151592560?v=4"
            linkedin="https://www.linkedin.com/in/yuri-henrick-3babb51b1/"
            github="https://github.com/slickzeraa"
          />
        </div>
      </div>
    </>
  );
}

export default Turma;