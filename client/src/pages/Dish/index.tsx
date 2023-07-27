import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CaretLeft } from "@phosphor-icons/react"

import { api } from "../../libs/axios"

import { Container, DishInfo, Tags } from "./styles"

import { useAuth } from "../../hooks/useAuth"

import { Loading } from "../../components/Loading"
import { Quantity } from "../../components/Quantity"

interface DishType {
  id: string
	image: string,
  name: string,
	price: number,
	description: string,
	category_name: string,
	created_at: string,
	updated_at: string
  ingredients: {
    id: string,
		name: string,
		dish_id: string,
		created_at: string,
		updated_at: string
  }[]
}

export function Dish() {
  const { user } = useAuth()

  const { dish_id } = useParams()

  const [dish, setDish] = useState<DishType | null>(null)
  const [isFetching, setIsFetching] = useState(false)
  const [quantity, setQuantity] = useState(1)

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  function increaseQuantity() {
    setQuantity(prev => prev + 1)
  }

  useEffect(() => {
    async function getDish() {
      try {
        setIsFetching(true)
        const response = await api.get<DishType>(`/dishes/${dish_id}`)
        setDish(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsFetching(false)
      }
    }

    getDish()
  }, [])

  return (
    <Container>
      <Link to="/">
        <CaretLeft size={24} weight="bold" />
        voltar
      </Link>

      {isFetching ? (
        <Loading />
      ) : (
        <DishInfo>
          {dish && (
            <>
              <img src={import.meta.env.VITE_API_BASE_URL + `/files/${dish.image}`} alt="" />

              <div>
                <h2>{dish.name}</h2>

                <p>{dish.description}</p>

                <Tags>
                  {dish.ingredients.map(ingredient => (
                    <span key={ingredient.id}>
                      {ingredient.name}
                    </span>
                  ))}
                </Tags>

                {!user?.admin ? (
                  <Quantity
                    quantity={quantity}
                    onDecreaseQuantity={decreaseQuantity}
                    onIncreaseQuantity={increaseQuantity}
                    price={dish.price}
                  />
                ) : (
                  <Link to="/editar">
                    Editar prato
                  </Link>
                )}
              </div>
            </>
          )}
        </DishInfo>
      )}
    </Container>
  )
}
