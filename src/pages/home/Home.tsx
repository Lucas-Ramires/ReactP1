import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"


function Home() {
    return (
        <>
            <div className="bg-[#03071e] flex justify-center">
                <div className='container grid grid-cols-2 text-white pt-10 pb-10'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://img.freepik.com/fotos-gratis/desenho-de-colagem-de-pessoas_23-2148888277.jpg?t=st=1716828973~exp=1716832573~hmac=4b6ed36604004e9dbac62fd57c247be13d1b4b57f5651b34f08b9c45b6247909&w=740"
                            alt="Imagem Inicial"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home