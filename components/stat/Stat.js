import Image from 'next/image'
import Ellipsis from '../Ellipsis'

const Stat = ({ title, icon, values, range }) => {
  const style = title.toLowerCase().replace(' ', '-')
  const { current, previous } = values
  return (
    <div className="relative pt-[2.375rem] animated-card-hover">
      {/* background */}
      <div
        className={`absolute top-0 left-0 z-10 w-full overflow-hidden h-5/6 clr-${style} rounded-2xl  transition-all move-up`}
      >
        <div className="absolute -top-2 right-4">
          <Image
            src={icon.src}
            height={icon.height}
            width={icon.width}
            alt="icon"
          />
        </div>
      </div>
      {/* background */}

      {/* content */}
      <div className="relative z-20 px-6 transition-colors cursor-pointer bg-clr-card py-7 rounded-2xl hover:bg-clr-card-hover">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-white" value={title}>
            {title}
          </h3>

          <Ellipsis />
        </div>

        <div className="relative flex flex-col justify-between gap-2 mt-2 xs:items-center xs:flex-row md:flex-col md:items-start md:mt-6">
          <p className="text-[2rem] text-white font-light md:text-[3.5rem] leading-none md:leading-normal">
            {current === 1 ? current + 'hr' : current + 'hrs'}
          </p>
          <p className="text-base xs:absolute xs:right-0 xs:-translate-y-1/2 text-clr-accent xs:top-1/2 md:relative">
            {range} - {previous === 1 ? previous + 'hr' : previous + 'hrs'}
          </p>
        </div>
      </div>
      {/* content */}
    </div>
  )
}

export default Stat
