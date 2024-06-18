export default function Header() {

  return (
    <header id="main-title" className="flex flex-col gap-12 items-center justify-between p-20">
    <h1 className="text-5xl text-center text-yellow-500">
      STAR WARS
    </h1>
    <h2 id="second-title" className="font-sans leading-6">
      A long time ago in a galaxy far, <br /> far away ...
    </h2>
    <div className="flex-1 flex items-center justify-center">
              <div className="flex gap-4">
                <h1 className="text-white hover:text-yellow-500 px-3 py-1 rounded-md text-xl">All Characters</h1>
              </div>
          </div>
</header>
  )
}
