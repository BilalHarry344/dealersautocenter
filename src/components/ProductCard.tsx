import { Link } from 'react-router-dom'
// constants, interfaces
import { getVehicleDetailsPath } from '../constants/routes'
import type { ProductCardProps } from '../interfaces/props/productCardProps'

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={getVehicleDetailsPath(product.id)}
      className="group block overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
    >
      <article>
        <div className="aspect-square overflow-hidden bg-slate-900/40 p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="space-y-3 p-4">
          <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-white sm:text-base">
            {product.title}
          </h3>
          <p className="text-xl font-bold tracking-tight text-cyan-300">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </article>
    </Link>
  )
}

export default ProductCard
