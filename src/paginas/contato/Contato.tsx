import './Contato.css'

function Contato(){
    return(
        <>
        
    
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold" style={{ textAlign: 'left' }}>
    <div className="fundoContato hidden lg:block"></div>
  <form>
  <h2 className='text-5xl font-bold'>Contato</h2>
    <label htmlFor="nome">Nome:</label> <br />
    <input type="text" id="nome" 
    placeholder="Nome"
    className="border-2 border-slate-700 rounded p-2"
    />
    <br />
    <label htmlFor="email">E-mail:</label> <br />
    <input type="text" id="email" 
    placeholder="Email"
    className="border-2 border-slate-700 rounded p-2"
    />
    <br />
    <label htmlFor="assunto">Assunto:</label> <br />
    <textarea
      name="assunto"
      id="assunto"
      placeholder="Assunto"
      className="border-2 border-slate-700 rounded p-2"
      cols={40}
      rows={5}
      defaultValue={""}
    />
    <br />
    <br />
    <button className='rounded text-white bg-red-600  hover:bg-red-600  w-1/3 py-2' type='submit'>
    <span>Enviar</span>
             </button>

  </form>
</div>
        </>
    );

}




export default Contato; 