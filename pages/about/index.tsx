import { useState } from 'react'

// components
import Skills from '../../components/About/Skills'
import Text from '../../components/About/Text'

//  data
import { strengths, skillsIcons, background, certifications, aboutSections } from '../../data/aboutData'


// framer motion
import OpacityTransition from '../../components/About/OpacityTransition'

//components
import Accordion from '../../components/About/Accordion'

// renderSwitch function

const renderSwitch = (index: Number) => {
  switch (index) {
    case 0:
      return <OpacityTransition>
        <Skills skills={skillsIcons} key={`content-${index}`} />
      </OpacityTransition>
    case 1:
      return <OpacityTransition>
        <Accordion text={certifications} key={`content-${index}`} />
      </OpacityTransition>
    case 2:
      return <OpacityTransition>
        <Accordion text={strengths} key={`content-${index}`} />
      </OpacityTransition>
    case 3:
      return <OpacityTransition>
        <Text text={background} key={`content-${index}`} />
      </OpacityTransition>
  }
}

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='xl:h-full w-full text-center
    xl:text-left pb-[120px] xl:pt-[160px] pt-[23vh] overflow-y-auto'>
      <div className='container h-full flex flex-col justify-center mx-auto xl:pt-[30px]'>
        <div className='flex flex-col xl:flex-row gap-x-6 2xl:gap-x-9 2xl:gap-y-6 gap-y-4 xl:pr-28 justify-center items-center xl:items-start'>
          {/* text */}
          <div className='flex-1 flex flex-col gap-y-5 xl:gap-y-0'>
            <h2 className='h2'>
              Self-taught<span className='text-accent'><br /> Developer</span>
            </h2>
            <p className='max-w-[500px] 2xl:max-w-[750px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-start text-lg md:text-2xl 2xl:text-[36px] 2xl:tracking-normal 2xl:leading-[3rem]'>
              Building myself from scratch as a developer has provided me with great adaptability, autonomy, and the confidence to overcome every challenge I face.
            </p>
          </div>
          {/* vertical line*/}
          <div className='xl:h-[310px] 2xl:h-[470px] xl:border-l-[1px] border-white border-solid mr-6 ml-4' />
          {/* info */}
          <div
            className='flex flex-col gap-y-6 xl:gap-y-0 w-full max-w-[500px] xl:max-w-[48%] border-2 rounded-lg 
            border-gray-600 xl:border-none p-6 xl:p-0'>
            <div className='flex gap-x-4 xl:gap-x-8 2xl:gap-x-12 mx-auto xl:mx-0 xl:my-4 2xl:my-6 flex-wrap xl:justify-start justify-center gap-y-4 2xl:gap-y-6'>
              {aboutSections.map((item, itemIndex) => {
                return (
                  <div
                    key={`menu-${itemIndex}`}
                    className={`${index === itemIndex &&
                      'text-accent xl:after:w-[100%] xl:after:bg-accent xl:after:transition-all xl:after:duration-300'
                      } cursor-pointer capitalize xl:text-lg 2xl:text-[24px] relative after:w-8 after:h-[2px]
                  xl:after:bg-white xl:after:absolute xl:after:-bottom-1 xl:after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item}
                  </div>
                )
              })}
            </div>
            <hr className='xl:hidden' />
            <div className='relative py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 '>
              <div
                className='flex-1 flex flex-col md:flex-row max-w-max 2xl:max-w-[600px]
                 text-white/60 2xl:text-[1.5rem] '
              >
                <div>
                  {renderSwitch(index)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
