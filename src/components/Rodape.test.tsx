import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "./Card/Rodape"

describe("Onde não existe participantes suficientes", () => {
    test("O sorteio nao pode ser iniciado", () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole("button");

        expect(botao).toBeDisabled();
    })
})