import React from "react";
export default function Text({ title, subtitle, date, content, link, linkText, transp }) {
    return (
        <>
            <div className={`w-full mt-auto mb-auto ease-in-out duration-100 ${transp ? 'opacity-100 text-white' : 'opacity-50 text-gray-600'}`}>
                <b><div className="group  w-full">
                    <span className={`text-3xl bg-left-bottom bg-gradient-to-r from-white to-white bg-no-repeat bg-[length:100%_2px] transition-all duration-1000 ease-out `} style={{textShadow:'2px 2px 10px #ff0000'}}>
                        {title}
                    </span>
                    <div>
                        {subtitle}
                    </div>
                    <div className="text-sm text-gray-500">
                        Conducted on: {date}
                    </div>
                </div></b>
                <br></br>
                <div className="w-full"><p>{content}</p></div>
                <br></br>
                <a target="_blank" className={`group text-m hover:text-blue-500 text-blue-700 transition-all duration-300 ease-in-out text-neutral-${transp ? 0 : 950}`} href={link}>
                    <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        {linkText} <span className="text-sm">↗</span>
                    </span>
                </a>
            </div>
        </>
    )
}