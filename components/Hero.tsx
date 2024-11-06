import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
    return (
        <section
            className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className='hero-map'/>
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image src='/camp.svg' alt='camp' width={50} height={50}
                       className='absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]'/>
                <h1 className='bold-52 lg:bold-68'>Albanian Alps, Albania</h1>
                <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
                    Albanian Alps, Albania: For the adventurous traveler, the Albanian Alps offer breathtaking
                    landscapes and challenging hiking trails. Perfect for those interested in underwater adventures,
                    Hurghada offers some of the best diving spots in the world.
                </p>
                <div className='my-11 flex flex-wrap gap-5'>
                    <div className='flex items-center gap-2'>
                        {Array(5).fill(1).map((_, i) => (
                            <Image src='/star.svg' alt='star' width={24} height={24}/>
                        ))}
                    </div>
                    <p className='bold-16 lg:bold-20 text-blue-70'>
                        158k
                        <span className='capitalize regular-16 lg:regular-20 ml-3'>Excellent reviews</span>
                    </p>
                </div>
                <div className='flex flex-col w-full gap-3 sm:flex-row'>
                    <Button type='button' title='download app' variant='btn_green'/>
                    <Button type='button' title='how we work' icon='/play.svg' variant='btn_white_text'/>
                </div>
            </div>
            <div className='relative flex flex-1 items-start'>
                <div className='relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 capitalize text-gray-20'>Location</p>
                            <Image src='/close.svg' alt='close' width={24} height={24}/>
                        </div>
                        <p className='bold-20 text-white capitalize'>albania</p>
                    </div>
                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20 capitalize'>distance</p>
                            <p className='bold-20 text-white'>123.5km</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20 capitalize'>elevation</p>
                            <p className='bold-20 text-white'>3.5 km</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Hero
