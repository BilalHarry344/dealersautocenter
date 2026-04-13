import type { PaginationProps } from '../../interfaces/props/paginationProps'

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
            page === currentPage
              ? 'bg-cyan-300 text-slate-950'
              : 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
