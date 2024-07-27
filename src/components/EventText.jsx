import React from "react";
export default function Text({ title, subtitle, date, content, link, linkText, transp }) {
    return (
        <>
            <div className={`mt-10 mb-20 mr-4 md:mr-0 w-full md:mt-auto md:mb-auto ease-in-out duration-700 ${transp ? 'opacity-100 text-white' : 'opacity-10 text-black' } `} style={{fontFamily:'sans-serif'}}>
                <b><div className="group  w-full" style={{marginBottom:'5vh'}}>
                    <span className={`text-2xl md:text-4xl bg-left-bottom bg-gradient-to-r from-purple-700 to-purple-700 bg-no-repeat bg-[length:100%_2px] transition-all duration-1000 ease-out `} style={{textShadow:'3px 3px 10px #a78bfa'}}>
                        {title}
                    </span>
                    <div className="text-m md:text-m" style={{color:'rgb(167 139 250)'}}>
                        {subtitle}
                    </div>
                </div></b>
                <div className="w-full md:text-xl"><p>{content}</p></div>
                <div className="text-gray-500 " style={{marginTop:'2vh' , fontSize:'3vh'}}>
                        Conducted on: {date}
                </div>
                <a target="_blank" className={`group text-m hover:text-purple-500 text-blue-700 opacity-90 transition-all duration-300 ease-in-out text-neutral-${transp ? 0 : 950}`} href={link}>
                    <span className="bg-left-bottom bg-gradient-to-r from-purple-400 to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out text-lg">
                        {linkText} <span className="text-clip">↗</span>
                    </span>
                </a>
                
            </div>
        </>
    )
}