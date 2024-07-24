import React, { useEffect, useState } from "react";
import Text from "./EventText";
import { useInView } from 'react-intersection-observer'

export default function Event() {

    const [imglink, setImglink] = useState('https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg')

    const [myref1, visible1] = useInView({ threshold: 0.6 })
    const [myref2, visible2] = useInView({ threshold: 0.4 })

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
            <div className="grid-cols-2 flex justify-around w-full bg-black text-white"
                style={{ scrollBehavior: "smooth", gap: "3.5vw" }}>
                <div className="w-full relative text-m" style={{ marginLeft: "6vw" }}>
                    <div ref={myref1} className={`flex w-full h-screen `}>
                        <Text title='ON-PREM V/S CLOUD' subtitle='A Virtualization Worshop' date='22th April 2024' content='This interactive workshop aims to understand the concepts of Virtualization, offering hands-on projects on Virtualization, both locally and on the cloud.
                            Understand how to set up virtual machines, configure the networks and resource optimization while performing deployment of a website.' link="https://www.meetup.com/aws-cloud-club-at-pict/events/300534045/" linkText="Visit MeetUp" transp={visible1} />
                    </div>
                    <div ref={myref2} className={`flex  w-full h-screen `}>
                        <Text title='Unlocking Cloud Computing ' subtitle='Introduction to AWS Cloud Club PICT' date="16th April 2024" content='This introductory session is dedicated to exploring the concepts of cloud computing, uncovering the benefits of joining the cloud club, and discussing upcoming events and future aspirations.Join us as we break down the complexities of cloud technology, highlight the opportunities available through our club, and outline our vision for exciting journey ahead.' link="https://www.meetup.com/aws-cloud-club-at-pict/events/300417318/" linkText="Visit MeetUp" transp={visible2} />
                    </div>
                </div>
                
                <div className="overflow-visible grid grid-cols-1 " style={{width:'5vw' , height:"100vh" , paddingTop:"10vh", justifyContent:'center'}}>
                    
                    <div className="bg-gradient-to-b from-green-500 to-blue-500  rounded-xl m-auto" style={{width:"0.5vh" , height:"40vh"}}></div>
                    
                    <div className="relative bg-black/50 border-blue-500 m-auto" style={{width:"2vh" , height:"2vh" , marginTop:"2vh" , rotate:"45deg" , borderWidth:"0.3vh" }}></div>
                    
                    <div className="bg-gradient-to-b from-blue-500 to-green-500  rounded-xl m-auto" style={{width:"0.5vh" , height:"90vh" , marginTop:"2vh"}}></div>
                    
                    <div className=" bg-black/50 border-green-500 m-auto" style={{width:"2vh" , height:"2vh" , marginTop:"2vh" ,translate:' 0' , rotate:"45deg" , borderWidth:"0.3vh" }}></div>
                    
                    <div className="bg-gradient-to-b from-green-500 to-blue-500 rounded-xl m-auto" style={{width:"0.5vh" , height:"40vh" ,marginTop:"2vh" }}></div>
                
                </div>

                <div className="justify-center w-full mr-14" >
                    <div className="rounded-3xl sticky top-1/4 ease-in-out duration-300 overflow-auto flex justify-center align-middle" style={{ objectFit:'contain' , height: "45vh", marginBottom: "27vh", marginTop: "27vh",  boxShadow: "rgb(255 90 255 / 50%) 0px 0px 300px" }}>
                        <img src={imglink}></img>
                    </div>
                </div>
            </div>
        </>
    );
}