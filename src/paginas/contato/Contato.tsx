
function Contato(){
    return(
<>
  {/* component */}
  {/* Tailwind Play: https://play.tailwindcss.com/qIqvl7e7Ww  */}
  <div className="flex min-h-screen items-center justify-start bg-white">
    <div className="mx-auto w-full max-w-lg">
      <h1 className="text-4xl font-medium">Entre em contato</h1>
      <p className="mt-3">Email para identificaai@gmail.com ou deixe uma mensagem aqui:</p>
      <form action="https://api.web3forms.com/submit" className="mt-10">
        {/* This is a working contact form. 
   Get your free access key from: https://web3forms.com/  */}
        <input
          type="hidden"
          name="access_key"
          defaultValue="YOUR_ACCESS_KEY_HERE"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative z-0">
            <input
              type="text"
              name="name"
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              Seu nome
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="text"
              name="email"
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              Seu email
            </label>
          </div>
          <div className="relative z-0 col-span-2">
            <textarea
              name="message"
              rows={5}
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              defaultValue={""}
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              Sua mensagem
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 rounded-md bg-black px-10 py-2 text-white"
        >
          Envie a Mensagem
        </button>
      </form>
    </div>
  </div>
</>

    );

}




export default Contato; 