import { useContext } from "react"
import { ProductDataContext } from "../contexts/ProductDataContext"

const {productData} = useContext(ProductDataContext);

export const FilterParams = {
  chipsetManufacturers: Array.from(new Set([...productData.map(product => product.chipSetManufacturer)])),
  brands: Array.from(new Set([...productData.map(product => product.brand)])),
  VRAM: Array.from(new Set([...productData.map(product => product.VRAM)])),
  memoryType: Array.from(new Set([...productData.map(product => product.memoryType)])),
  fanCount: Array.from(new Set([...productData.map(product => product.fanCount)])),
}