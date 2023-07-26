import { HeartStraight, Minus, Plus, PencilSimple } from "@phosphor-icons/react"

import { Container, Quantity } from "./styles"

import { useAuth } from "../../hooks/useAuth"

import { DishType } from "../../contexts/DishesContext"

import { Button } from "../Button"
import { Link } from "react-router-dom"

interface DishProps {
  dish: DishType
}

export function Dish({ dish }: DishProps) {
  const { user } = useAuth()

  return (
    <Container>
      {!user?.admin ? (
        <button type="button" aria-label="Favoritar prato">
          <HeartStraight size={24} />
        </button>
      ) : (
        <button type="button" aria-label="Editar prato">
          <PencilSimple size={24} />
        </button>
      )}
      <img src={import.meta.env.VITE_API_BASE_URL + `/files/${dish.image}`} alt="" />
      <Link to={`/dish/${dish.id}`}>
        <h3>{dish.name}</h3>
      </Link>
      <p>{dish.description}</p>
      <strong>R$ 79,97</strong>
      {!user?.admin && (
        <div>
          <Quantity>
            <button
              type="button"
            >
              <Minus size={24} />
            </button>

            <span>01</span>

            <button
              type="button"
            >
              <Plus size={24} />
            </button>
          </Quantity>
          <Button>Incluir</Button>
        </div>
      )}
    </Container>
  )
}
