import Image from "next/image";

const Guide = () => {
    return (
        <section className='flexCenter flex-col'>
            <div className='padding-container max-container w-full pb-24'>
                <Image src='/camp.svg' alt='camp' width={50} height={50}/>
                <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>we are here for you</p>
                <div className='flex flex-wrap justify-between gap-5'>
                    <h2 className='bold-40 lg:bold64 xl:max-w-[390px] capitalize'>guide you to easy path</h2>
                    <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Tucked into the northern interior, the
                        Albanian Alps are equally part of the draw. Known, rather
                        ominously, as the Accursed Mountains, this realm of jagged karst peaks is a dream for hikers,
                        where lynxes roam spruce forests and wildflowers cover valley floors. Those looking to tackle
                        the region’s challenging trails can set off on a new, eight-day, self-guided tour with Walks
                        Worldwide, which offers an itinerary that includes treks through mountain passes, traditional
                        homestays and a visit to the village of Theth, starting point of the Peaks of the Balkans hiking
                        trail. </p>
                </div>
            </div>
            <div className='flexCenter max-container relative w-full'>
                <Image src='/boat.png' alt='boat' width={1440} height={580}
                       className='w-full object-center object-cover 2xl:rounded-5xl'/>
                <div
                    className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
                    <Image src='/meter.svg' alt='meter' width={16} height={158} className='h-full w-auto'/>
                    <div className='flexBetween flex-col'>
                        <div className='flex w-full flex-col'>
                            <div className='flexBetween w-full'>
                                <p className='regular-16 text-gray-20 capitalize'>destination</p>
                                <p className='bold-16 text-green-50'>30 min</p>
                            </div>
                            <p className='bold-20 mt-2'>Belfast, Northern Ireland</p>
                        </div>
                        <div className='flex w-full flex-col'>
                            <p className='regular-16 text-gray-20 capitalize'>start track</p>
                            <h4 className='bold-20 mt-2 whitespace-nowrap'>Emilia-Romagna, Italy</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Guide
