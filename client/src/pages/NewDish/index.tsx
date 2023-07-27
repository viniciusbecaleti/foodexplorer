import { Link } from "react-router-dom"
import { CaretLeft, UploadSimple } from "@phosphor-icons/react"

import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { Textarea } from "../../components/Textarea"

export function NewDish() {
  return (
    <Container>
      <Link to="/">
        <CaretLeft size={24} weight="bold" />
        voltar
      </Link>

      <h1>Adicionar prato</h1>

      <Form>
        <div>
          <label className="image">
            <span>Imagem do prato</span>
            <div>
              <UploadSimple size={24} />
              Selecionar imagem
              <Input type="file" />
            </div>
          </label>

          <label className="name">
            <span>Nome</span>
            <Input type="text" placeholder="Ex.: Salada Ceasar" />
          </label>

          <label className="category">
            <span>Categoria</span>
            <Select>
              <option value="">Refeição</option>
            </Select>
          </label>

          <label className="ingredient">
            <span>Ingredientes</span>
            <div>
              <span>Teste</span>
              <Input type="text" />
            </div>
          </label>

          <label className="price">
            <span>Preço</span>
            <Input type="text" placeholder="R$ 0,00" />
          </label>

          <label className="description">
            <span>Dexcrição</span>
            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </label>
        </div>
      </Form>
    </Container>
  )
}
