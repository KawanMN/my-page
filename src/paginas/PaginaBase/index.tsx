import { Outlet } from "react-router-dom"
import Barra from "../../components/Menu"
import Rodape from "../../components/Rodape"
import Perfil from "../../components/Perfil"



export default function PaginaBase() {
    return (
        <>
            <main>
                <Barra />
                <Perfil/>
            </main>
            <Rodape />
        </>
    )
}
