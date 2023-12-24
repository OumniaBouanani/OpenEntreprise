import React from 'react'



const Contribute = () => {
    return (
        <div className='my-16 text-center'>
            <h1 className="text-6xl font-bold mb-6 mx-auto">Help us improve Open Enterprise</h1>
            <p className="text-lg">As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering <br /> the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success.</p>
            <div className='flex flex grid-cols-3 ml-8 mt-12'>
                <div className='w-[427px] h-[240px] bg-white rounded-[16px] shadow-xl ml-8'>
                    <p className="font-semibold text-[18px] mt-6 ml-6  text-left ">Ideate a list of features based on the Sociocracy model</p>
                    <p className="font-light ml-6 mt-2 text-[16px] text-left ">We’re looking for someone interested in <br /> business theory and research that’ll <br /> help us bridge the gap between our s...</p>
                    <div className='flex flex grid-cols-2 mt-6 ml-8'>
                        <div className="w-[82px] h-[32px] bg-[#71A894] text-white  rounded-[40px] pt-[4px] pb-[4px] pl-[8px] pr-[8px]" >5 AUT</div>
                        <p className="font-thin text-[18px] ml-32 text-right ">Apply by May 15</p>
                    </div>
                </div>
                <div className='w-[427px] h-[216px] bg-white rounded-[16px] shadow-xl ml-8'>
                    <p className="font-semibold text-[18px] mt-6 ml-6  text-left ">Update documentation with FAQs</p>
                    <p className="font-light ml-6 mt-2 text-[16px] text-left ">Review our community chat for the most <br /> frequently asked questions and document <br /> answers for our product docs.</p>
                    <div className='flex flex grid-cols-2 mt-6 ml-8'>
                        <div className="w-[82px] h-[32px] bg-[#71A894] text-white  rounded-[40px] pt-[4px] pb-[4px] pl-[8px] pr-[8px]" >10 AUT</div>
                        <p className="font-thin text-[18px] ml-32 text-right ">Apply by May 18</p>
                    </div>
                </div>
                <div className='w-[427px] h-[216px] bg-white rounded-[16px] shadow-xl ml-8'>
                    <p className="font-semibold text-[18px] mt-6 ml-6  text-left ">Tutorial video series</p>
                    <p className="font-light ml-6 mt-2 text-[16px] text-left ">Create a series of video tutorials that <br /> cover everything from start to finish on <br /> using Open Enterprise.</p>
                    <div className='flex flex grid-cols-2 mt-6 ml-8'>
                        <div className="w-[82px] h-[32px] bg-[#71A894] text-white  rounded-[40px] pt-[4px] pb-[4px] pl-[8px] pr-[8px]" >40 AUT</div>
                        <p className="font-thin text-[18px] ml-32 text-right ">Apply by May 20</p>
                    </div>
                </div>
            </div>
            <button className="rounded-[16px] font-thin text-lg mt-16 bg-[#303031] text-white w-[136px] h-[64px]">View more</button>
        </div>
    )

}


export default Contribute