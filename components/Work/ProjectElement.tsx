// next Image
import Image from "next/image";

// icons
import { MdScreenSearchDesktop } from "react-icons/md";

// types
import { Project } from "./WorkSliderNoSSR";
type ProjectElementProps = {
    project: Project
    openModal: (arg0: Project) => void
}

const ProjectElement = ({ openModal, project }: ProjectElementProps) => {
    return (
        <div onClick={() => openModal(project)} className='rounded-lg
                  overflow-hidden flex items-center justify-center
                  group cursor-pointer'>
            <div className='flex items-center justify-center relative
                    overflow-hidden group h-full'>
                {/* image */}
                <Image src={project?.image} width={750} height={450} alt='Project mockup' />
                {/* overlay gradient */}
                <div className='absolute h-full inset-0 bg-primary opacity-0 xl:group-hover:opacity-70
                      transition-all duration-700'></div>
                {/* title */}
                <div className='absolute inset-0 h-full '>
                    <div className='h-full gap-x-2 text-[24px] tracking-[0.2em]
                     xl:group-hover:translate-y-0 xl:translate-y-full transition-all duration-300 flex flex-col justify-center items-center'>
                        {/* icon */}
                        <h2 className='hidden xl:block text-center tracking-normal text-3xl'>{project.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectElement;