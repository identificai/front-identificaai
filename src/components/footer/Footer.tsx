import { Link } from 'react-router-dom';
import { GithubLogo, FacebookLogo, Envelope } from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <section className="bg-slate-700 py-16 "> 
        <div className="max-w-screen-xl px-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"> 
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2 ">
              <Link to="/sobre" className="text-base leading-6 text-white block md:px-4 transition duration-300 hover:text-teal-400">
                Sobre
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/team" className="text-base leading-6 text-white block md:px-4 transition duration-300 hover:text-teal-400 ">
                Time
              </Link>
            </div>
            <div className="px-5 py-2">
              <a href="https://brasil.un.org/pt-br/sdgs/16" className="text-base leading-6 text-white block md:px-4 transition duration-300 hover:text-teal-400">
                ONU
              </a>
            </div>
            <div className="px-5 py-2">
              <Link to="/contato" className="text-base leading-6 text-white block md:px-4 transition duration-300 hover:text-teal-400">
                Contato
              </Link>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="mailto:identificai.24@gmail.com" className="text-gray-400 hover:bg-green-700 rounded-full">
              <span className="sr-only">Email</span>
              <Envelope size={32} weight="duotone" />            </a>
            <a href="https://github.com/identificai/" className="text-gray-400 hover:bg-purple-700 rounded-full">
              <span className="sr-only">GitHub</span>
              <GithubLogo size={32} weight="duotone" />            </a>
            <a href="#" className="text-gray-400 hover:bg-blue-700 rounded-full">
              <span className="sr-only">Facebook</span>
              <FacebookLogo size={32} weight="duotone" />             </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 Identifica Aí, Inc. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </>
  )
}

export default Footer;
