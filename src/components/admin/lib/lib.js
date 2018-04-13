
export const assignImage = image => {
  if (image === "null") {
    return "/images/profile.png"
  } else {
    return image
  }
}
