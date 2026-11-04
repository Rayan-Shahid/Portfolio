

import {PROJECTS} from '../lib/data'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

export default function Projects (){
    return (
        <section id='selected-projects' className='py-section'>
            <div className="container">
                <SectionTitle title='Main Project'/>
                {PROJECTS.map((data, index)=>(
                    <div className='project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none' key={data.slug}>
                       <Image 
                        src={data.thumbnail}
                        alt={data.title}
                        width={300}
                        height={200}
                        className='w-full object-cover mb-6 aspect-[3/2] object-top' />
                        <div className="flex gap-2 md:gap-5">
                            <div className='font-anton text-muted-foreground'>{(index + 1).toString().padStart(2, '0')}</div>
                        <div>
                        <h4 className='text-4xl xs:text-6xl font-anton'>{data.title}</h4>
                        <div className='mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs'>{data.techStack.slice(0,3).map((tech)=>(
                            <span key={tech}>{tech}</span>
                        ))}</div>
                        </div>                       
                        </div>
                       
                    </div>
                ))}
            </div>
        </section>   
    )
}