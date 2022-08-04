import React from 'react'

function GlassPlayer() {
    return (
        <div className="backdrop w-10/12 md:w-1/4 bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg">
            {/* header */}
            <div className="w-full mb-3 pb-3 border-b border-1 border-white">
                <h3 className="text-xl font-semibold text-shadow">Something Good</h3>
            </div>
            {/* body */}
            <div>
                <img src="https://i.postimg.cc/SxLx0fHV/bg01.jpg" alt="image1" className="w-full h-48 object-cover mb-2" />
                <p className="mb-3 tracking-wide text-base text-shadow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, omnis.
                </p>
                <button className="backdrop bg-white bg-opacity-0 border border-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">
                    Detail
                </button>
            </div>
        </div>

    )
}

export default GlassPlayer