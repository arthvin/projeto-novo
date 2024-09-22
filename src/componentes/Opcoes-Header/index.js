import styled from 'styled-components'

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const OpcoesContainer = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE' ]

function OpcoesHeader() {
    return (
        <OpcoesContainer>
            { textoOpcoes.map( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </OpcoesContainer>
    )
}

export default OpcoesHeader