import React from 'react'

const Button = ({title}) => {
    return (
        <button className="relative inline-flex h-11 overflow-hidden rounded-2xl p-[1px] ">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
               {title}
            </span>
        </button>
    )
}

export default Button