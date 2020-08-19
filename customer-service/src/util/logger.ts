
const info = (message: string) => {
  console.log(message)
}

const warn = (message: string) => {
  console.warn(message)
}

const error = (message: string) => {
  console.error(message)
}

export default {
  info,
  warn,
  error
}