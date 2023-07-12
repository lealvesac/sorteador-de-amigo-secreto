import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Sorteio from "./Sorteio";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

jest.mock("../state/hook/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe("Na Pagina de sorteio", () => {
  const participantes = ["Ana", "Catarina", "Jorel"];

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  test("Todos os participantes podem exebir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio></Sorteio>
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantes.length);
  });
});
