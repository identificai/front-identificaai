import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Footer */}
      <section className="bg-white py-16"> {/* Aumenta a altura do footer definindo uma quantidade maior de padding vertical */}
        <div className="max-w-screen-xl px-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"> {/* Remove o py-12 e adiciona padding horizontal */}
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link to="/about" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Sobre
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/team" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Time
              </Link>
            </div>
            <div className="px-5 py-2">
              <a href="https://brasil.un.org/pt-br/sdgs/16" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                ONU
              </a>
            </div>
            <div className="px-5 py-2">
              <Link to="/contact" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Contato
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/terms" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                Termos
              </Link>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="mailto:identificai.24@gmail.com" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Email</span>
              {/* Substitua 'URL_DO_SEU_ICONE_DE_EMAIL' pelo URL do ícone de e-mail */}
              <img src="data:image/png;base64,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" alt="Ícone de e-mail" className="w-6 h-6"/>
            </a>
            <a href="https://github.com/identificai/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              {/* Substitua 'URL_DO_SEU_ICONE_DO_GITHUB' pelo URL do ícone do GitHub */}
              <img src="data:image/png;base64,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" alt="Ícone do GitHub" className="w-6 h-6"/>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              {/* Substitua 'URL_DO_SEU_ICONE_DO_FACEBOOK' pelo URL do ícone do Facebook */}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEUAAAD///8GBgby8vLIyMg+Pj4oKCiioqJ+fn4SEhIgICDr6+sjIyOmpqbm5uZ0dHRjY2O0tLR3d3eamppDQ0PAwMDY2Ni5ubn39/eRkZHHx8dcXFxvb2/Ozs5XV1cuLi5PT0+NjY32DxGjAAAC+UlEQVR4nO3dUVPaQBSG4d1UUUk2JAERLUr7//9kEWWYaYubZLtzztm+74V3Ot8z6ZBIgnX+ozp0TeVKqWq6UH/K3Olru5felKF9exH20mMy1Z+Fa+kl2Vp/CEs9gu/178JWekXW2qOwxBeZSyvvaukNmatdkJ6QueA66QmZ61wjPSFzjSvnUu3vle4jIiIy0nLzfT/c/9nq1LCU3pfScggv5/eLrraRXjm3xfD4LYY7dSu9dF7D6yidVWETxh09q8KHfgLPovB5ms+c8K2dCjQmXE/22RJW419AbQoP0/+F2hIeppwiLArnAs0Il3OBZoTbuUArwonXMfaEq/lAG8JmV7rwKQFoQvgjBWhCOO9axpCwSwJaEM4/FRoRvqUBDQiTXkgtCOdfkFoR7hOB+oU3xQtTLthMCNOuZywI75KF2u/MjH57bbcNP/ebQ7P8LfWPZo/0bc3eJlyO8tWGn60bdTZ8lV6Z0pj7MFvpkUmFOHBn++HIx7jwWXpjWvHfDXfSExOLPmnhn6QnJhYXDtITE4v/cmj1TH8uLpRemFpUaP3THlVUaPt0P0Zo+orNjRHeSE9MLC58kZ6YGMcQof4QItQfQoT6Q4hQfwgR6g8hQgMV8S5Gtfii+DH88tsXi4M079gmhkjrQdrn3C1ChAjFQ4gQobQPIUKECBEiRIgQIUKECBEiRIgQIUKE/6ry764twt3VQvTT+O36+neffoL2DzoXcZf7q8p/UgEhQv0hRKg/hAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAUIo39Fyfr/6eyG+0id9EIiIqL/JO1/ejG1yjXSEzLXuNKvmzoXpCdkLrhaekLmauf30huytvLOt9IjstYehb6XXpGx3r8L/Vp6R7bW/kNY7FHs/Vno25X0mAytWn8Rel+HrinnAq5qulB/yn4BfL443R4+q7AAAAAASUVORK5CYII=" alt="Ícone do Facebook" className="w-6 h-6"/>
            </a>
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
