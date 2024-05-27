import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"

function Navbar() {
    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('O usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <>
            <div className='w-full flex justify-center py-4 bg-[#06d6a0] text-white'>

                <div className="container flex justify-between text-lg">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        Perfil

                        <Link to="" onClick={logout} className="hover:underline">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar