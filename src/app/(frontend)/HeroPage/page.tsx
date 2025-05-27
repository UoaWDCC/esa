'use client'
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMkQzNzQ4Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjMwMCIgcj0iNDAiIGZpbGw9IiM0QTVCNkMiLz4KPGNpcmNsZSBjeD0iNDAwIiBjeT0iMjAwIiByPSIzNSIgZmlsbD0iIzRBNUI2QyIvPgo8Y2lyY2xlIGN4PSI2MDAiIGN5PSI0MDAiIHI9IjQ1IiBmaWxsPSIjNEE1QjZDIi8+CjxjaXJjbGUgY3g9IjgwMCIgY3k9IjI1MCIgcj0iMzgiIGZpbGw9IiM0QTVCNkMiLz4KPGNpcmNsZSBjeD0iMTAwMCIgY3k9IjM1MCIgcj0iNDIiIGZpbGw9IiM0QTVCNkMiLz4KPGNpcmNsZSBjeD0iMTIwMCIgY3k9IjIwMCIgcj0iMzciIGZpbGw9IiM0QTVCNkMiLz4KPGNpcmNsZSBjeD0iMTQwMCIgY3k9IjMwMCIgcj0iNDAiIGZpbGw9IiM0QTVCNkMiLz4KPGNpcmNsZSBjeD0iMTYwMCIgY3k9IjI1MCIgcj0iMzkiIGZpbGw9IiM0QTVCNkMiLz4KPGNpcmNsZSBjeD0iMzAwIiBjeT0iNTAwIiByPSI0MyIgZmlsbD0iIzRBNUI2QyIvPgo8Y2lyY2xlIGN4PSI1MDAiIGN5PSI2MDAiIHI9IjQxIiBmaWxsPSIjNEE1QjZDIi8+CjxjaXJjbGUgY3g9IjcwMCIgY3k9IjU1MCIgcj0iNDQiIGZpbGw9IiM0QTVCNkMiLz4KPGNpcmNsZSBjeD0iOTAwIiBjeT0iNjAwIiByPSIzNiIgZmlsbD0iIzRBNUI2QyIvPgo8Y2lyY2xlIGN4PSIxMTAwIiBjeT0iNTUwIiByPSI0NSIgZmlsbD0iIzRBNUI2QyIvPgo8Y2lyY2xlIGN4PSIxMzAwIiBjeT0iNjAwIiByPSI0MCIgZmlsbD0iIzRBNUI2QyIvPgo8Y2lyY2xlIGN4PSIxNTAwIiBjeT0iNTUwIiByPSIzOCIgZmlsbD0iIzRBNUI2QyIvPgo8Y2lyY2xlIGN4PSIxNzAwIiBjeT0iNjAwIiByPSI0MiIgZmlsbD0iIzRBNUI2QyIvPgo8L3N2Zz4K')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-reservoir-grunge text-red-500 mb-4 tracking-tight leading-none">
          EASTERN STUDENTS
        </h1>
        <h1 className="text-6xl md:text-8xl font-reservoir-grunge text-red-500 mb-8 tracking-tight leading-none">
          ASSOCIATION
        </h1>

        {/* Subtitle */}
        <p className="text-white text-xl md:text-2xl mb-12 font-smeltex-medium max-w-md">
          Your go-to university social club.
        </p>

        {/* Call to Action Button */}
        <div className="relative">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-smeltex-medium py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Join the ESA family!
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
