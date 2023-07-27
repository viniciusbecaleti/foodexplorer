import { Minus, Plus } from "@phosphor-icons/react"

import { Container, Controller } from "./styles"

import { Button } from "../Button"
import { priceFormatter } from "../../utils/formatter"

interface QuantityProps {
  price?: number | null
  quantity: number,
  onDecreaseQuantity: () => void
  onIncreaseQuantity: () => void
}

export function Quantity({ price = null, quantity, onDecreaseQuantity, onIncreaseQuantity }: QuantityProps) {
  return (
    <Container>
      <Controller>
        <button
          type="button"
          aria-label="Diminuir quantidade"
          onClick={onDecreaseQuantity}
        >
          <Minus size={24} />
        </button>

        <span>{String(quantity).padStart(2, "0")}</span>

        <button
          type="button"
          aria-label="Aumentar quantidade"
          onClick={onIncreaseQuantity}
        >
          <Plus size={24} />
        </button>
      </Controller>

      <Button>Incluir {price && <span>{priceFormatter.format((price / 100) * quantity)}</span>}</Button>
    </Container>
  )
}
