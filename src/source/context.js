import { createContext , useContext } from "react";

export const EventContext = createContext({
    events : [


        {id:1, title : "Science", content : 'Science is a strict systematic discipline that builds and organizes knowledge in the form of testable hypotheses and predictions about the world.', linkurl : "https://en.wikipedia.org/wiki/Science", linkText : "Visit wikipedia for science", imgUrl : "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg",      
            
        },


        {id:2, title : "Maths", content : 'SMathematics is a field of study that discovers and organizes methods, theories and theorems that are developed and proved for the needs of empirical sciences and mathematics itself. ', linkurl : "https://en.wikipedia.org/wiki/Mathematics", linkText : "Visit wikipedia for maths", imgUrl : "https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            
        },


        {id:3, title : "Biology", content : 'Biology is the scientific study of life.[1][2][3] It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field.', linkurl : "https://en.wikipedia.org/wiki/Biology", linkText : "Visit wikipedia for biology", imgUrl : "https://images.pexels.com/photos/753271/pexels-photo-753271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , 
            
        }


    ]
})

export const useEventProvider = ()=>{
    return useContext(EventContext);
}

export const EventProvider = EventContext.Provider;