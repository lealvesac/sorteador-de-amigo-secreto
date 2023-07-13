import Card from "Components/Card"
import Formulario from "Components/Formulario/Formulario"
import ListaParticipantes from "Components/ListaParticipantes/ListaParticipantes"
import Rodape from "Components/Rodape/Rodape"

const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao