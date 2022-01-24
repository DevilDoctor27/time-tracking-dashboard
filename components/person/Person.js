import Image from 'next/image'
import avatar from '../../public/images/image-jeremy.png'

const Person = ({ currentCategory, action, categories }) => {
  return (
    <div className="relative pb-[9.375rem] xs:pb-[4.375rem]  lg:h-full lg:pb-40">
      <div className="relative z-20 flex flex-col items-center justify-center gap-4 px-4 xs:flex-row bg-clr-person py-9 rounded-2xl lg:flex-col lg:px-8 lg:gap-11 lg:h-full lg:justify-start">
        <div className="max-w-[4rem] w-full rounded-full border-4 md:max-w-[4.875rem] lg:mr-auto">
          <Image
            src={avatar.src}
            height={avatar.height}
            width={avatar.width}
            layout="responsive"
            alt="avatar"
          />
        </div>
        <h2 className="text-center xs:text-left">
          <p className="text-[0.938rem] font-normal text-clr-accent">
            Report for
          </p>
          <p className="text-2xl font-light text-white w-fit md:text-[2.5rem] lg:leading-tight lg:mt-1">
            Jeremy Robson
          </p>
        </h2>
      </div>
      <div className="absolute bottom-0 z-10 flex items-end w-full h-full px-6 pb-6 bg-clr-card rounded-2xl lg:pl-8">
        <div className="flex flex-col justify-around w-full gap-2 xs:flex-row md:gap-12 xs:gap-6 lg:flex-col lg:gap-4 lg:items-start ">
          {categories.map((category, index) => (
            <button
              className={`text-lg font-normal capitalize  hover:text-white transition-colors ${
                currentCategory === category
                  ? 'text-white'
                  : 'text-clr-inactive'
              }`}
              key={index}
              type="button"
              value={category}
              onClick={action}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Person
