import { lights } from './constants'

// Provided. Pretend this is an external module.
export const fetchLight = () => {
  return new Promise((resolve, reject) => {
    const light = lights[Math.floor(Math.random() * 3)]
    light
      ? resolve(light)
      : reject(Error("Impossible condition"))
  })
}
