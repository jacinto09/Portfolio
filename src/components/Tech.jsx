import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'

function Tech () {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, index) => (
        <div className='w-28 h-28' key={tech.name}>
          <BallCanvas
            icon={tech.icon}
          />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')
