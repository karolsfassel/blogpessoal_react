import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

function Home() {
  return (
    <>
      <main className=" bg-sky-300 flex justify-center">
        <section className="container grid grid-cols-2 text-white">
          <article className="flex flex-col gap-4 items-center justify-center py-4">
             <h1 className="text-5xl font-bold text-sky-700">Seja Bem Vindo!</h1>
             <p className='text-x1'>Expresse aqui seus pensamentos e opiniões</p>
             <div className='fleex justify-around gap-4'>
              
               <ModalPostagem />
               
            </div>
          </article>
          <figure className="flex justify-center">
            <img src="https://i.imgur.com/hMRcmiy.png" alt="imagem Pagina Home" className="w-2/3"/>
          </figure>
        </section>
      </main>
       <ListaPostagens />
    </>
  );
}
export default Home;
 