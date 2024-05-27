import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            
                <div className="flex w-full bg-[#00C9C8] py-2 px-4 items-center gap-4">
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div>
                <div className=''>
                    <div className='p-4'>
                        <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                        <p>{postagem.texto}</p>
                        <p>Tema: {postagem.tema?.descricao}</p>
                        <p>Data: {new Intl.DateTimeFormat(undefined, {
                            dateStyle: 'full',
                            timeStyle: 'medium',
                        }).format(new Date(postagem.data))}</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full font-serif text-black bg-[#ffd166]
                    hover:bg-[#fca312] flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`}
                    className='text-white bg-[#f25c54]
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem