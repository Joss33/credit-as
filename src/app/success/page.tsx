
export default function Success() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="flex justify-center items-center mb-5 text-3xl font-semibold text-gray-900 dark:text-white"
        >
          <img src="/image/logo-credias-max.png" className='block mx-auto mb-5' alt="" />
        </a>
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
          Gracias por contactar con nosotros
          
        </h1>
        <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
          Hemos recibido tu mensaje!
        </p>
        <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400 mb-5">
          Nos pondremos en contacto con usted inmediatamente
        </p>
        <a type="button" href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Regresar al home</a>
      </div>
    </section>
  )
}
