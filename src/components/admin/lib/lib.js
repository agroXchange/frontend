
export const assignImage = image => {
  if (image === "null") {
    return "/images/profile.png"
  } else {
    return image
  }
}

export const searchingByName = term => {
  return function(x) {
    return x.profile.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}


export const searchingByOrderName = term => {
  return function(x) {
    return x.product.code.titleeng.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}
