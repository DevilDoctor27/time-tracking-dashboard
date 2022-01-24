import Image from 'next/image'
import avatar from '../../public/images/image-jeremy.png'

const Person = ({ active, action }) => {
  return (
    <div className="relative pb-[9.375rem] xs:pb-[4.375rem]">
      <div className="relative z-20 flex flex-col items-center justify-center gap-4 px-4 xs:flex-row bg-clr-person py-9 rounded-2xl">
        <div className="max-w-[4rem] w-full rounded-full border-4 md:max-w-[4.875rem]">
          <Image
            src={avatar.src}
            height={avatar.height}
            width={avatar.width}
            layout="responsive"
          />
        </div>
        <h2 className="text-center xs:text-left">
          <p className="text-[0.938rem] font-normal text-clr-accent">
            Report for
          </p>
          <p className="text-2xl font-light text-white w-fit md:text-[2.5rem]">
            Jeremy Robson
          </p>
        </h2>
      </div>
      <div className="absolute bottom-0 z-10 flex items-end justify-center w-full h-full px-6 pb-6 bg-clr-card rounded-2xl">
        <div className="flex flex-col gap-2 xs:flex-row md:gap-12 xs:gap-6 ">
          <button
            className={`text-lg font-normal capitalize text-clr-inactive hover:text-white transition-colors ${
              active ? 'text-white' : ''
            }`}
            type="button"
            onClick={action}
          >
            daily
          </button>
          <button
            className={`text-lg font-normal capitalize text-clr-inactive hover:text-white transition-colors ${
              active ? 'text-white' : ''
            }`}
            type="button"
            onClick={action}
          >
            weekly
          </button>
          <button
            className={`text-lg font-normal capitalize text-clr-inactive hover:text-white transition-colors ${
              active ? 'text-white' : ''
            }`}
            type="button"
            onClick={action}
          >
            monthly
          </button>
        </div>
      </div>
    </div>
  )
}

export default Person
