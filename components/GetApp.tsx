import Button from "@/components/Button";
import Image from "next/image";

const GetApp = () => {
    return (
        <section className='flexCenter w-full  flex-col pb-[100px] '>
            <div className='get-app '>
                <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
                    <h2 className='bold-40 lg:bold-64 xl:max-w-[320px] capitalize'>get for free now</h2>
                    <p className='regular-16 text-gray-10 capitalize'>available on iOS & Android</p>
                    <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
                        <Button type='button' title='app store' icon='/apple.svg' variant='btn_white' full/>
                        <Button type='button' title='play store' icon='/android.svg' variant='btn_dark_green_outline'
                                full/>
                    </div>
                </div>
                <div className='flex flex-1 items-center justify-end'>
                    <Image src='/phones.png' alt='phones' height={870} width={550}/>
                </div>
            </div>
        </section>
    )
}
export default GetApp
