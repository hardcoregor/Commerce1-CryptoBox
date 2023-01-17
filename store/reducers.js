export const provider = (state = {}, action) => {
  switch (action.type) {
    case 'PROVIDER_LOADED':
      return {
        ...state,
        connection: action.connection
      }

    default:
      return state
  }
}

export const utils = (state = { vision: false, typeBox: '', price: 0 }, action) => {
  switch (action.type) {
    case 'MODAL_STATE':
      return {
        ...state,
        vision: action.vision
      }

      case 'CHOOSEN_BOX':
        return {
          ...state,
          typeBox: action.typeBox
        }

        case 'CHOOSEN_BOX_PRICE':
          return {
            ...state,
            price: action.price
          }

    default:
      return state
  }
}