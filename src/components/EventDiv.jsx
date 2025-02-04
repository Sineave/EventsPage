import React, { useEffect, useState } from "react";
import Text from "./EventText";
import { useInView } from 'react-intersection-observer'

export default function Event() {

    const [imglink, setImglink] = useState('https://secure.meetupstatic.com/photos/event/4/4/2/0/600_520517440.webp?w=384')

    const [myref1, visible1] = useInView({ threshold: 0.5 })
    const [myref2, visible2] = useInView({ threshold: 0.5 })

    useEffect(() => {
        if (visible1) {
            setImglink('https://secure.meetupstatic.com/photos/event/4/4/2/0/600_520517440.webp?w=384')
        }
        if (visible2) {
            setImglink('https://secure.meetupstatic.com/photos/event/6/d/b/1/600_520408081.webp?w=384')
        }
    }, [visible1, visible2])



    return (
        <>
            <div>

                <div className="bg-black  text-white text-5xl md:text-7xl flex justify-center pt-10 md:h-1/6  " style={{ gridArea: '' }}>
                    <span className={`bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-no-repeat bg-[length:100%_0.6vh] rounded-full`} style={{ textShadow: '3px 3px 10px #a78bfa' }}>
                        See What's On
                    </span>
                </div>

                <div className=" grid-cols-2 flex justify-around w-full bg-black text-white"
                    style={{ scrollBehavior: "smooth", gap: "3.5vw" }}>


                    <div className="block text-sm md:w-full relative md:text-m " style={{ marginLeft: "6vw" }}>

                        <div ref={myref1} className={`flex flex-wrap w-full h-screen `}>

                            <div className={`md:hidden md:mt-0 mt-7 block justify-center w-full ease-in-out duration-700 ${visible1 ? 'opacity-100' : 'opacity-40' }`} style={{ marginRight: '8vw' }}>
                                <div className="rounded-3xl overflow-auto flex justify-center align-middle" style={{ objectFit: 'contain', height: "30vh", marginTop: 'vh', boxShadow: "rgb(56 189 248 / 60%) 0px 0px 300px" }}>
                                    <img src='https://secure.meetupstatic.com/photos/event/4/4/2/0/600_520517440.webp?w=384'></img>
                                </div>
                            </div>

                            <Text title='ON-PREM V/S CLOUD' subtitle='A Virtualization Worshop' date='22th April 2024' content='This interactive workshop aims to understand the concepts of Virtualization, offering hands-on projects on Virtualization, both locally and on the cloud.
                            Understand how to set up virtual machines, configure the networks and resource optimization while performing deployment of a website.' link="https://www.meetup.com/aws-cloud-club-at-pict/events/300534045/" linkText="Visit MeetUp" transp={visible1} />


                        </div>


                        <div ref={myref2} className={`flex flex-wrap w-full h-screen `}>

                            <div className={`md:hidden block justify-center w-full ease-in-out duration-700 ${visible2 ? 'opacity-100' : 'opacity-40' }`} style={{ marginRight: '8vw' }}>
                                <div className="rounded-3xl overflow-auto flex justify-center align-middle" style={{ objectFit: 'contain', height: "30vh", marginTop: '5vh', boxShadow: "rgb(56 189 248 / 60%) 0px 0px 300px" }}>
                                    <img src='https://secure.meetupstatic.com/photos/event/6/d/b/1/600_520408081.webp?w=384'></img>
                                </div>
                            </div>

                            <Text title='Unlocking Cloud Computing ' subtitle='Introduction to AWS Cloud Club PICT' date="16th April 2024" content='This introductory session is dedicated to exploring the concepts of cloud computing, uncovering the benefits of joining the cloud club, and discussing upcoming events and future aspirations.Join us as we break down the complexities of cloud technology, highlight the opportunities available through our club, and outline our vision for exciting journey ahead.' link="https://www.meetup.com/aws-cloud-club-at-pict/events/300417318/" linkText="Visit MeetUp" transp={visible2} />


                        </div>
                    </div>

                    <div className="hidden overflow-visible md:grid grid-cols-1 " style={{ width: '5vw', height: "100vh", justifyContent: 'center' }}>

                        <div className="bg-gradient-to-b from-purple-700 to-blue-500  rounded-xl m-auto " style={{ width: "0.5vh", height: "30vh"  , marginTop:'10vh'}}></div>

                        <div className="bg-black/0 border-blue-400 m-auto" style={{ width: "2vh", height: "2vh", marginTop: "2vh", rotate: "45deg", borderWidth: "0.3vh" }}></div>

                        <div className="bg-gradient-to-b from-blue-400 to-purple-700  rounded-xl m-auto" style={{ width: "0.5vh", height: "100vh", marginTop: "2vh" }}></div>

                        <div className="bg-black/0 border-purple-700 m-auto" style={{ width: "2vh", height: "2vh", marginTop: "2vh", translate: ' 0', rotate: "45deg", borderWidth: "0.3vh" }}></div>

                        <div className="bg-gradient-to-b from-purple-700 to-blue-400 rounded-xl m-auto" style={{ width: "0.5vh", height: "40vh", marginTop: "2vh" }}></div>

                    </div>

                    <div className="hidden md:block justify-center w-full mr-14" >
                        <div className="rounded-3xl sticky top-1/4  overflow-auto flex justify-center align-middle" style={{ objectFit: 'contain', height: "45vh", marginBottom: "27vh", marginTop: "27vh", boxShadow: "rgb(56 189 248 / 50%) 0px 0px 300px" }}>
                            <img src={imglink}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}