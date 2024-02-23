import { Link } from 'react-router-dom'

function Navbar() {
 
  return (
    <>
     <div className='w-full bg-red-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold ml-4'>Identifica ai</div>
            <div className='flex gap-4 mr-4'>

            <Link to="/" className='hover:underline'>Home</Link>
            <Link to="/login" className='hover:underline'>Login</Link>
            <Link to="/sobre" className='hover:underline'>Sobre nós</Link>
            <Link to="/contato" className='hover:underline'>Contato</Link>
            <Link to="/cadastro" className='hover:underline'>Cadastro</Link>
            <Link to="/login" className='hover:underline'>Login</Link>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
