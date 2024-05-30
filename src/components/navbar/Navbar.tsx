import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ReactNode, useContext } from "react"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Navbar() {
    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta('O usuário foi desconectado com sucesso!',"info")
        navigate('/')
    }
    //reactnode é qualquer coisa que voce pode renderizar na sua tela
    let component: ReactNode;

    if(usuario.token !== ""){

        component=(
        <div className='w-full flex justify-center py-4 bg-[#06d6a0] text-white'>

                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>

                        <Link to="" onClick={logout} className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            { component }
        </>
    )
}

export default Navbar