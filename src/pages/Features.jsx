import React from "react"
import Icon1 from '../assets/Icon1.png'
import Icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'
import Member from '../assets/Member.png'
import Star from '../assets/Star.png'
import Cover from '../assets/Cover.png'



const Features = () => {
    return (
        <div className="py-16 item-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Reimagining what it means to work</h1>
            <p className="text-[14px] ml-4 mr-4 text-justify md:mx-auto md:text-center md:text-lg">Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization.</p>
            <div className="flex flex-col sm:flex-row sm:grid-cols-3 mt-12 ml-4 sm:ml-24 mr-4 sm:mr-24">
                    <div className="w-5/6 md:w-1/3 h-72  bg-white pt-8 mx-auto md:mr-8 mt-8 md:mt-auto rounded-[16px] shadow-xl">
                        <img src={Icon1} alt="" className="mt-6 mx-auto"/>
                        <h1 className="mt-4 text-center text-xl font-semibold">Modern workforce</h1>
                        <p className="ml-6 mr-6 mt-4 text-[14px] text-center">Multistakeholder governance aligns employees with the organization’s wider community.</p>
                    </div>
                    <div className="w-5/6 md:w-1/3 h-72 bg-white pt-8 mx-auto md:mr-8 mt-8 md:mt-auto rounded-[16px] shadow-xl">
                        <img src={Icon2} alt="" className="mx-auto mt-6"/>
                        <h1 className="mt-4 text-center text-xl font-semibold">Meritocratic by design</h1>
                        <p className="ml-6 mr-6 mt-4 text-[14px] text-center">Tokenized ownership aligns deeply committed individuals with the organization’s success.</p>
                    </div>
                    <div className="w-5/6 md:w-1/3 h-72 content-center bg-white pt-8 mx-auto md:mr-8 mt-8 md:mt-auto rounded-[16px] shadow-xl">
                        <img src={Icon3} alt="" className="mx-auto mt-6"/>
                        <h1 className="mt-4 text-center text-xl font-semibold">Engineered for resilience</h1>
                        <p className="ml-6 mr-6 mt-4 text-[14px] text-center">Open Enterprise supports best practices in sociocratic management.</p>
                    </div>   
            </div>
            <div className="flex flex-col sm:flex-row sm:grid-cols-2 mt-32 ml-8 ">
                <div className="md:mr-24 md:w-1/2">
                    <img src={Icon1} alt="" className="mx-left" />
                    <h1 className="text-3xl md:text-[40px] font-extrabold mt-8 text-left ">Kickstart an organization with your co-founders</h1>
                    <p className="mr-4 md:mr-auto md:text-left text-sm mt-6">It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.</p>
                </div>
                <div className="w-[400px] h-[360px] bg-white border border-black border-solid border-4 rounded-lg shadow-md shadow-[#71A894] mx-auto mt-8 md:mt-auto ">
                    <h1 className="mt-6 font-bold text-2xl ml-6 text-left">Members</h1>
                    <div className="ml-8 mt-6">
                    <div className="flex flex grid-cols-2 mb-4">
                        <img src={Member} alt="" />
                        <div className="ml-4 mt-2">
                            <h1 className="text-xl">Dillon Kydd</h1>
                            <p className="text-[#66645E] text-sm text-left">100 shares</p>
                        </div>
                        </div>
                        <div className="flex flex grid-cols-2 mb-4">
                        <img src={Member} alt="" />
                        <div className="ml-4 mt-2">
                            <h1 className="text-xl">Anna Olsen</h1>
                            <p className="text-[#66645E] text-sm text-left">100 shares</p>
                        </div>
                        </div>
                        <div className="flex flex grid-cols-2 mb-4">
                        <img src={Member} alt="" />
                        <div className="ml-4 mt-2">
                            <h1 className="text-xl">Kas Moss</h1>
                            <p className="text-[#66645E] text-sm text-left">100 shares</p>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:grid-cols-2 my-24 ml-8  ">
                <div className="hidden md:block w-[400px] h-[360px] bg-white mt-4 md:ml-16 mr-16 border border-black border-solid border-4 rounded-lg shadow-md shadow-[#71A894]  ">
                    <div className="ml-8 mt-6 felx flex grid-cols-2">
                        <img src={Member} alt="" />
                        <div className="mt-2 font-bold text-2xl ml-6 text-left">
                            <h1 className="">Jassir Jonis</h1>  
                            <p className="text-[#66645E] text-sm font-light text-left">Pre-seed angel investor</p>
                        </div>
                    </div>
                    <p className="font-light mt-4 ml-8 text-left">Hey guys, love what you’re doing and I’m convinced that together we’ll achieve amazing things.</p>
                    <div className="flex flex  grid-cols-2 mt-8 pl-8">
                        <div>
                            <p className="text-[#66645E] text-lg font-light text-left">COMMIT</p>
                            <p className="text-xl">10,000 DAI</p>
                        </div>
                        <div className="ml-24">
                            <p className="text-[#66645E] text-lg font-light text-left">SHARES</p>
                            <p className="text-xl">20</p>
                        </div>
                    </div>
                    <button className="rounded-lg font-light text-xl mt-4 bg-[#303031] text-white w-[340px] h-[40px]">Go to vote</button>
                </div>
                <div className="mt-12 mx-auto md:ml-24 md:w-1/2">
                    <img src={Icon1} alt="" className="mx-left" />
                    <h1 className="text-3xl md:text-[40px] font-extrabold mt-8 text-left ">Onboard users, investors and advisors as you grow</h1>
                    <p className="md:text-left text-sm mt-6 mr-4 md:mr-auto">It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution  for. You’re ready to embark the startup journey.</p>
                </div>
                <div className="block md:hidden w-[400px] h-[360px] bg-white mt-8 mx-auto md:ml-16 md:mr-16 border border-black border-solid border-4 rounded-lg shadow-md shadow-[#71A894] ">
                    <div className="ml-8 mt-6 felx flex grid-cols-2">
                        <img src={Member} alt="" />
                        <div className="mt-2 font-bold text-2xl ml-6 text-left">
                            <h1 className="">Jassir Jonis</h1>  
                            <p className="text-[#66645E] text-sm font-light text-left">Pre-seed angel investor</p>
                        </div>
                    </div>
                    <p className="font-light mt-4 ml-8 text-left">Hey guys, love what you’re doing and I’m convinced that together we’ll achieve amazing things.</p>
                    <div className="flex flex  grid-cols-2 mt-8 pl-8">
                        <div>
                            <p className="text-[#66645E] text-lg font-light text-left">COMMIT</p>
                            <p className="text-xl">10,000 DAI</p>
                        </div>
                        <div className="ml-24">
                            <p className="text-[#66645E] text-lg font-light text-left">SHARES</p>
                            <p className="text-xl">20</p>
                        </div>
                    </div>
                    <button className="rounded-lg font-light text-xl mt-4 bg-[#303031] text-white w-[340px] h-[40px]">Go to vote</button>
                </div>
                
            </div>
            
            <div className="flex flex-col sm:flex-row sm:grid-cols-2 my-24 ml-8 ">
                <div className="mt-16 mr-auto md:mr-24">
                    <img src={Icon1} alt="" className="mx-left" />
                    <h1 className="text-3xl md:text-[40px] font-extrabold mt-8 mx-auto md:text-left ">Engage highly committed contributors</h1>
                    <p className="md:text-left mx-auto mr-4 md:mr-auto text-sm mt-6">You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares.</p>
                </div>
                <div className="mt-12 mx-auto md:mt-4 md:ml-24 md:mr-8 ">
                    <div className="w-[420px] md:w-[560px] md:ml-8 h-[180px] md:h-[160px] bg-white border border-black border-solid border-4 rounded-[16px]">
                        <div className=" mt-4  ml-6 flex flex grid-cols-2">
                            <p className="font-semibold text-[18px]  text-left ">Write a how-to on Open Enterprise</p>
                            <div className="w-[82px] h-[32px] bg-[#71A894] text-white mr-8 md:ml-24 rounded-[40px] pl-[4px] pr-[4px] md:pt-[4px] md:pb-[4px] md:pl-[8px] md:pr-[8px]" >1 SHARE</div>
                        </div>
                        <p className="font-light ml-6 mt-2 pr-[10px] text-[16px] text-left ">Looking for an amazing copywriter using Open Enterprise to help us write an article on how to get started.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:grid-cols-2 mt-6">
                        <div className="mx-auto md:mr-4 w-[381px] h-[288px] bg-[#F3F0EA] border border-black border-solid border-4 rounded-[16px]">
                            <p className="ml-8 mt-6 text-left font-semibold text-[24px]  ">3 applicants</p>
                            <div className="mt-4 ml-8 flex flex grid-cols-4">
                                <img src={Member} className="w-[40px] h-[40px] mr-4" alt="" />
                                <p className="text-[20px] mr-16 ">Jason Kwon</p>
                                <img src={Star} alt="" className="w-[24px] h-[24px] mr-2" />
                                <p className="text-[20px] font-light">4,8</p>
                            </div>
                            <div className="mt-4 ml-8 flex flex grid-cols-4">
                                <img src={Member} className="w-[40px] h-[40px] mr-4" alt="" />
                                <p className="text-[20px] mr-16 ">Jason Kwon</p>
                                <img src={Star} alt="" className="w-[24px] h-[24px] mr-2" />
                                <p className="text-[20px] font-light">4,8</p>
                            </div>
                            <div className="mt-4 ml-8 flex flex grid-cols-4">
                                <img src={Member} className="w-[40px] h-[40px] mr-4" alt="" />
                                <p className="text-[20px] mr-16 ">Jason Kwon</p>
                                <img src={Star} alt="" className="w-[24px] h-[24px] mr-2" />
                                <p className="text-[20px] font-light">4,8</p>
                            </div>
                        </div>
                        <div className="w-[240px] h-[288px] mx-auto mt-8 md:mt-2 bg-white border border-[#71A894] border-solid border-4 rounded-[16px]">
                            <img src={Cover} className='w-[72px] h-[72px] mx-auto mt-6 rounded-[90px]'alt="" />
                            <p className="text-[20px] mx-auto mt-4 ">Alex Rose</p>
                            <p className="text-[#66645E] text-lg font-light mx-auto">UX Writer</p>
                            <div className="flex flex grid-cols-3 mt-4 ml-6">
                                <p className="mr-6">4 commits </p>
                                <img src={Star} alt="" className="w-[24px] h-[24px] mr-2" />
                                <p className="text-[20px] font-light">4,8</p>
                            </div>
                            <button className="rounded-[16px] font-thin text-lg mt-2 bg-[#303031] text-white w-[192px] h-[44px]">View profile</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}



export default Features