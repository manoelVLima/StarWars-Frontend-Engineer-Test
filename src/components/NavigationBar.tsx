
export default function NavigationBar() {
  return (
    <nav id="nav-bar" className="bg-black">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center">
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-yellow-500 px-3 py-1 rounded-md text-xl">Characters</a>
                <a href="#" className="text-white hover:text-yellow-500 px-3 py-1 rounded-md text-xl">Planets</a>
              </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
