import React, { useEffect, useReducer, useRef, useState } from "react";
import Text from "./Text";
import { useInView } from 'react-intersection-observer'

export default function Event() {

    const [imglink , setImglink] = useState('https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg')

    const [myref1 ,visible1] = useInView({threshold:0.5})
    const [myref2 ,visible2] = useInView({threshold:0.5})
    const [myref3 ,visible3] = useInView({threshold:0.5})
    const [myref4 ,visible4] = useInView({threshold:0.5})
    
    useEffect(()=>{
        if(visible1){
            setImglink('https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg')
        }
        if(visible2){
            setImglink('https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        }
        if(visible3){
            setImglink('https://images.pexels.com/photos/753271/pexels-photo-753271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        }
        if(visible4){
            setImglink('https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        }

        // console.log('visible1' , visible1)
        // console.log('visible2' , visible2)
        // console.log('visible3' , visible3)
        // console.log('visible4' , visible4)

    },[visible1,visible2,visible3,visible4])

    

    return (
        <>
            <div className="grid-cols-2 flex justify-around w-full bg-black text-white"
            style={{scrollBehavior:"smooth" , gap:"3.5vw"}}>
                <div className="w-full relative text-3xl" style={{marginLeft:"6vw"}}>
                    <div ref={myref1} className= {`flex w-full h-screen ` }>
                        <Text title='Science' content='Science is a strict systematic discipline that builds and organizes knowledge in the form of testable hypotheses and predictions about the world.' link="https://en.wikipedia.org/wiki/Science" linkText="Visit wikipedia for science" transp={visible1} />
                    </div>
                    <div ref={myref2} className={`flex  w-full h-screen `}>
                        <Text title='Maths' content='Mathematics is a field of study that discovers and organizes methods, theories and theorems that are developed and proved for the needs of empirical sciences and mathematics itself.' link="https://en.wikipedia.org/wiki/Mathematics" linkText="Visit wikipedia for maths" transp={visible2}/>
                    </div>
                    <div ref={myref3} className={`flex w-full h-screen `}>
                        <Text title='Biology' content='Biology is the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field.' link="https://en.wikipedia.org/wiki/Biology" linkText="Visit wikipedia for biology" transp={visible3}/>
                    </div>
                    <div ref={myref4} className={`flex w-full h-screen `}>
                        <Text title='Chemistry' content='Chemistry is the scientific study of the properties and behavior of matter.' link="https://en.wikipedia.org/wiki/Chemistry" linkText="Visit wikipedia for chemistry" transp={visible4}/>
                    </div>
                </div>
                <div className="bg-black w-full mr-20 ">
                    <div className="rounded-lg sticky top-1/4 ease-in-out duration-300 "  style={{backgroundImage: `url(${imglink})`, height:"54vh" , marginBottom:"20vh", marginTop:"21vh" ,backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",boxShadow:"rgb(255 255 255 / 50%) 0px 0px 20px"}}></div>
                </div>
            </div>
        </>
    );
}