import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1168rem;
  margin-inline: auto;
  padding: 48rem 24rem;

  > a {
    width: max-content;

    display: flex;
    align-items: center;

    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 24;
    color: ${({ theme }) => theme["light-300"]};

    margin-bottom: 24rem;
  }

  > h1 {
    font-size: 32rem;
    margin-bottom: 32rem;
  }
`

export const Form = styled.form`
  > div {
    display: grid;
    align-items: center;
    grid-template-areas:
      "image name name category"
      "ingredient ingredient ingredient price"
      "description description description description"
    ;
    gap: 32rem;

    label {
      > div, input, select {
        height: 48rem;
        border-radius: 8px;
      }

      > div, input, select, textarea {
        background: ${({ theme }) => theme["dark-800"]};
      }

      > span {
        display: inline-block;
        margin-bottom: 16rem;
        color: ${({ theme }) => theme["light-400"]};
      }
    }

    label.image {
      grid-area: image;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8rem;

        input {
          display: none;
        }
      }
    }

    label.name {
      grid-area: name;
    }

    label.category {
      grid-area: category;
    }

    label.ingredient {
      grid-area: ingredient;

      > div {
        display: flex;
        align-items: center;
        padding: 8rem 14rem;
        gap: 16rem;

        input {
          width: 50px;
          height: 100%;
          outline: none;
          box-shadow: none;
        }

        &:focus-within {
          box-shadow: 0 0 0 2px ${({ theme }) => theme["cake-100"]};
        }
      }
    }

    label.price {
      grid-area: price;
    }

    label.description {
      grid-area: description;
    }

    @media (max-width: 1024px) {
      grid-template-areas:
        "image"
        "name"
        "category"
        "price"
        "ingredient"
        "description"
      ;
      gap: 16rem;
    }
  }
`
