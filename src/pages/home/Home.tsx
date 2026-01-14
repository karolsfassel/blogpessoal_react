
function Home() {
  return (
    <>
      <main className="bg-indigo-900 flex justify-center">
        <section className="container grid grid-cols-2 text-white">
          <article className="flex flex-col gap-4 items-center justify-center py-4">
             <h1 className="text-5xl font-bold">Seja Bem Vindo!</h1>
             <p className='text-x1'>Expresse aqui seus pensamentos e opiniões</p>
             <div className='fleex justify-around gap-4'>
              <button className='rouded text-white border-white border-solid border-2 py px-4'>
                Nova Postagem
              </button>             
             </div>
          </article>
          <figure className="flex justify-center">
            <img src="https://i.imgur.com/fyfri1v.png" alt="imagem Pagina Home" className="w-2/3"/>
          </figure>
        </section>
      </main>
    </>
  );
}
export default Home;
 