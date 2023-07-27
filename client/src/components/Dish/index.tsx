import { useState } from "react"
import { Link } from "react-router-dom"
import { HeartStraight, PencilSimple } from "@phosphor-icons/react"

import { Container } from "./styles"

import { useAuth } from "../../hooks/useAuth"
import { DishType } from "../../contexts/DishesContext"
import { priceFormatter } from "../../utils/formatter"

import { Quantity } from "../Quantity"

interface DishProps {
  dish: DishType
}

export function Dish({ dish }: DishProps) {
  const { user } = useAuth()

  const [quantity, setQuantity] = useState(1)

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  function increaseQuantity() {
    setQuantity(prev => prev + 1)
  }

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

      <strong>{priceFormatter.format(dish.price / 100)}</strong>

      {!user?.admin && (
        <Quantity
          quantity={quantity}
          onDecreaseQuantity={decreaseQuantity}
          onIncreaseQuantity={increaseQuantity}
        />
      )}
    </Container>
  )
}
