import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#00C9C8] text-white font-bold text-2xl'>
                Tema
            </header>

            <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
            <div className="flex">

                <Link to={`/editartema/${tema.id}`}
                    className='w-full font-serif text-black bg-[#ffd166]
                    hover:bg-[#fca312] flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center 
                    justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas