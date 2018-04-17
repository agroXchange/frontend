
export const assignImage = image => {
  if (image === "null") {
    return "/images/profile.png"
  } else {
    return image
  }
}


export const changeInputType = value => {
  if (value === "expiration") {
    return "date"
} else {
  return "text"
}
}


export const productsFilter = (category,term) => {
  switch (category) {
    case "name":
      return searchingByProductName(term)
    case "country":
      return searchingByCountry(term)
    case "seller":
      return searchingBySellerName(term)
    case "expiration":
        return searchingByExpiredDate(term)
    default:
      return searchingByProductName(term)
    }
}


export const searchingByName = term => {
  return function(x) {
    return x.profile.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export const searchingByExpiredDate = term => {
  return function(x) {
    return x.expiration.includes(term) || !term;
  };
}


export const searchingByOrderName = term => {
  return function(x) {
    return x.product.code.titleeng.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export const searchingByProductName = term => {
  return function(x) {
    return x.code.titleeng.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export const searchingByCountry = term => {
  return function(x) {
    return x.seller.country.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export const searchingBySellerName = term => {
  return function(x) {
    return x.seller.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}
