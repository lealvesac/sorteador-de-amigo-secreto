import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

test("Quando o input estiver vazio, novos participantes nao podem ser adicionados", () => {
  render(<Formulario />);
  //Econtrar no DOM o iput
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );

  //Encotnrar o botão
  const button = screen.getByRole("button");

  //Garantir que o imput esteja no documento
  expect(input).toBeInTheDocument();

  //Garatir que o botao eseja desabilitado.
  expect(button).toBeDisabled();
});
