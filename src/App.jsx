import React from 'react'
import {ChatContext} from './context/ChatProvider'
import Chat from './componetes/Chat'
import Navbar from './componetes/Navbar'

const App = () => {

    const {usuario} = React.useContext(ChatContext)

    return usuario.activo !== null ? (
        <div className='container-fluid bg-dark text-white'>
            <Navbar />
            {
                usuario.activo ? (
                    <Chat/>
                ) : (
                    <div className='text-center mt-5 lead'>
                        click en acceder para iniciar chat
                    </div>
                )
            }
        </div>
    ) : (<div>Cargando...</div>)
}

export default App
