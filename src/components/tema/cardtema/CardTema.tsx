import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps{
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 text-white font-bold text-2xl
            bg-gradient-to-r from-sky-400 via-sky-300 to-pink-400
            '>
                Tema
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`} 
                    className='w-full text-slate-100 bg-sky-500 hover:bg-sky-700 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} 
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTema