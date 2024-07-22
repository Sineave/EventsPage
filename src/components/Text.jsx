import React from "react";
export default function Text({ title, content, link, linkText, transp }) {

    const transparent = 950

    return (
        <>
            <div className={`w-full mt-auto mb-auto ease-in-out duration-300 text-neutral-${transp ? 0 : transparent}`}>
                <b><div className="group  w-full">
                    <span className={`text-7xl bg-left-bottom bg-gradient-to-r from-white to-white bg-no-repeat bg-[length:100%_2px] transition-all duration-1000 ease-out`}>
                        {title}
                    </span>
                </div></b>
                <br></br>
                <div className="w-full"><p>{content}</p></div>
                <br></br>
                <a target="_blank" className={`group text-xl hover:text-blue-700 text-blue-500 transition-all duration-300 ease-in-out text-neutral-${transp ? 0 : transparent}`} href={link}>
                    <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        {linkText} <span className="text-sm">↗</span>
                    </span>
                </a>
            </div>
        </>
    )
}