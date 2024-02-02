'use client'
import Image from 'next/image'
import EconomyImage from '../public/economy.png'
import Quality from '../public/quality.png'
import Economy1 from '../public/Economy1.jpg'
import Gestion from '../public/gestion2.jpg'
import Inversion from '../public/inversion3.jpg'
import Soluciones from '../public/solucionesEmpresariales.png'
import Contenido from '../public/nuestro contenido.png'
import Nosotros from '../public/nosotros.png'

export default function Home() {
  return (
    <div className='w-full '>
      <Image src={EconomyImage} alt='Economy' />
      <Image src={Quality} alt='Quality' />
      <div className='flex  h-full max-h-[800px] w-full '>
        <div className='flex relative justify-center '>
          <div className='absolute z-50 top-[5%] text-white p-4'>
            <p className='text-xl font-bold'>Economia</p>
            <p className='text-xl'>Leer Mas</p>
          </div>

          <Image
            src={Economy1}
            alt='Economy'
            style={{ filter: 'grayscale(100%)', width: '100%' }}
            className='w-full'
            onMouseOver={(e) =>
              (e.currentTarget.style.filter = 'grayscale(0%)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.filter = 'grayscale(100%)')
            }
          />
        </div>
        <div className='flex relative justify-center w-full '>
          <div className='absolute z-50 top-[5%]'>
            <p className='text-black text-xl font-bold'>Gestion</p>
            <p className='text-black text-xl font-bold '>Leer Mas</p>
          </div>
          <Image
            src={Gestion}
            alt='Economy'
            style={{ filter: 'grayscale(100%)', width: '100%' }}
            className='w-full'
            onMouseOver={(e) =>
              (e.currentTarget.style.filter = 'grayscale(0%)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.filter = 'grayscale(100%)')
            }
          />
        </div>
        <div className='flex relative justify-center  w-full'>
          <div className='absolute z-50 top-[5%] text-white p-4 '>
            <p className='text-xl font-bold'>Inversion</p>
            <p className='text-xl font-bold'>Leer Mas</p>
          </div>
          <Image
            src={Inversion}
            alt='Economy'
            style={{ filter: 'grayscale(100%)', width: '100%' }}
            className='w-full'
            onMouseOver={(e) =>
              (e.currentTarget.style.filter = 'grayscale(0%)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.filter = 'grayscale(100%)')
            }
          />
        </div>
      </div>
      <Image src={Soluciones} alt='Economy' />
      <Image src={Contenido} alt='Economy' />
      <Image src={Nosotros} alt='Economy' />
    </div>
  )
}
