export default function Home() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply">
        <div className="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
        <img src="/image/logo-credias-max.png" className='block mx-auto mb-5' alt="" />
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Contacta con nosotros
          </h2>
          <p className="mb-16 font-light text-gray-400 sm:text-xl">
            Usamos un enfoque ágil para probar suposiciones y conectarnos con las necesidades.
            de su audiencia temprano y con frecuencia.
          </p>
        </div>
      </div>
      <div className="py-16 px-4 mx-auto -mt-96 max-w-screen-xl sm:py-24 lg:px-6 ">
        <form
          action="#"
          className="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2"
        >
          <div>
            <label
              htmlFor="first-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Número de documento
            </label>
            <input
              type="number"
              id="first-name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="000-000-0000"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Primer Nombre
            </label>
            <input
              type="text"
              id="last-name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Green"
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Fecha de expedición
            </label>
            <input
              type="date"
              id="date"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Número de whatsapp
            </label>
            <input
              type="number"
              id="phone-number"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="+12 345 6789"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@neero.co"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Déjanos un mensaje
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Deja un comentario..."
              defaultValue={""}
            />
            <p className="mt-4 text-sm text-gray-500">
              Al enviar este formulario, usted acepta nuestros{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Términos y condiciones
              </a>{" "}
              Y nuestra{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                política de privacidad
              </a>{" "}
              que explica cómo podemos recopilar, usar y divulgar su información personal
               información incluso a terceros.
            </p>
          </div>
          <a  
           href='/success'
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar mensaje
          </a>
        </form>
        <div className="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
              <svg
                className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Envíanos un correo electrónico:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Envíenos un correo electrónico para consultas generales, incluido el marketing y la asociación
              oportunidades.
            </p>
            <a
              href="mailto:abc@example.com"
              className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
            >
              hello@neero.co
            </a>
          </div>
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
              <svg
                className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Llámanos:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Llámenos para hablar con un miembro de nuestro equipo. Siempre estamos felices de ayudar.
            </p>
            <span className="font-semibold text-blue-600 dark:text-blue-500">
              +1 (646) 786-5060
            </span>
          </div>
          <div>
            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
              <svg
                className="w-5 h-5 text-gray-600 lg:w-8 lg:h-8 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Soporte</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Envíenos un correo electrónico para consultas generales, incluido el marketing y la asociación
              oportunidades.
            </p>
            <a
              href="#"
              className="inline-flex py-2 px-4 text-sm font-medium text-center rounded-lg border text-blue-600 border-blue-600 hover:text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Centro de Soporte
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}
