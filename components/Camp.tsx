import Image from "next/image";
import {PEOPLE_URL} from "@/constants";

interface CampProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
    return (
        <div
            className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-5xl`}>
            <div className='flex h-full flex-col items-start justify-between p-6 lg:py-10 lg:px-20'>
                <div className='flexCenter gap-4'>
                    <div className='rounded-full bg-green-50 p-4'>
                        <Image src='/folded-map.svg' alt='map' width={28} height={28}/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='bold-18 text-white'>{title}</h4>
                        <p className='regular-14 text-white'>{subtitle}</p>
                    </div>
                </div>
                <div className='flexCenter gap-6'>
                    <span className='flex -space-x-4 overflow-hidden'>
                        {PEOPLE_URL.map((url) => (
                            <Image src={url} alt='person' width={52} height={52}
                                   className='inline-block h-10 w-10 rounded-full'/>
                        ))}
                    </span>
                    <p className='bold-16 md:bold-20 text-white capitalize'>{peopleJoined}</p>
                </div>
            </div>
        </div>
    )
}

const Camp = () => {
    return (
        <section
            className='2xl:max-container relative flex flex-col px-10 lg:mb-10 lg:py-20 xl:mb-20'>
            <div
                className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
                <CampSite backgroundImage='bg-bg-img-1' title='Tokyo, Japan' subtitle='Hurghada, Egypt'
                          peopleJoined='10+ joined'
                />
                <CampSite backgroundImage='bg-bg-img-2' title='Tokyo, Japan' subtitle='somewhere in the wild'
                          peopleJoined='45+ joined'/>
            </div>
            <div className='flexEnd mt-10 px-6 lg:-mt-40 lg:mr-6'>
                <div
                    className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative overflow-hidden w-full rounded-3xl'>
                    <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'><strong>Feeling
                        lost</strong> And not sure about the way?
                    </h2>
                    <p className='regular-14 xl:regular-16 mt-5 text-white'>Travellers on the hunt for something a
                        little different from their next European adventure are increasingly looking towards Albania.
                        This piece of the Balkan jigsaw is drawing a rising number of visitors thanks to its Adriatic
                        and Ionian coasts, intriguing Ottoman and Communist past, and relatively nascent tourism
                        scene.</p>
                    <Image src='/quote.svg' alt='quote' width={186} height={219} className='camp-quote'/>
                </div>
            </div>
        </section>
    )
}
export default Camp
