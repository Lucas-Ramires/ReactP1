import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'
import FormTema from './components/tema/formtema/FormTema'
import ListaTemas from './components/tema/listatemas/ListaTemas'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import DeletarPostagem from './components/postagem/deletarpostagem/DeletarPostagem'
import FormPostagem from './components/postagem/formpostagem/FormPostagem'
import ListaPostagens from './components/postagem/listapostagens/ListaPostagens'

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Navbar />
                    <div className='min-h-[80vh]'>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/temas" element={<ListaTemas />} />
                            <Route path="/cadastrartema" element={<FormTema />} />
                            <Route path="/editartema/:id" element={<FormTema />} />
                            <Route path="/deletartema/:id" element={<DeletarTema />} />
                            <Route path="/postagens" element={<ListaPostagens />} />
                            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App