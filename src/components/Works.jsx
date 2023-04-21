import Tilt from 'react-parallax-tilt'
import { projects } from '../constants'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

function ProjectCard ({ index, name, description, tags, image, sourceCodeLink }) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
      >
        <div className='relative w-full h-[230px] '>
          <img src={image} alt={name} className='w-full h-full rounded-2xl object-cover' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <a
              href={sourceCodeLink}
              target='_blank'
              rel='noreferrer'
              className='black-gradient w-10 h-10 flex justify-center items-center rounded-full'
            >
              <img src={github} alt='github link' className='w-1/2 h-1/2 object-contain' />
            </a>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {
            tags.map(tag => (
              <p
                className={`text-[14px] ${tag.color}`}
                key={tag.name}
              >
                ⚫ {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
              </p>
            ))
          }
        </div>
      </Tilt>
    </motion.div>
  )
}

function Works () {
  return (
    <>
      <motion.div
        variants={textVariant}
      >
        <h2 className={`${styles.sectionHeadText}`}>
          Projects
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience throught real-world examples of my work.
          It reflects my ability to solve problems, work with different technologies and manage work flows.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7 '>
        {projects.map((project, index) => (
          <ProjectCard
            {...project}
            index={index}
            key={`project-${index}`}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')
