import { useState, createContext } from "react";
export const GlobalContext = createContext();


function GlobalProvider(props) {
    const [Page1, setPage1] = useState('on')
    const [Page2, setPage2] = useState('off')
    const [Page3, setPage3] = useState('off')
    const [Page4, setPage4] = useState('off')
    const [Page5, setPage5] = useState('off')
    const [Page6, setPage6] = useState('off')
    
    return <GlobalContext.Provider value={{Page1, setPage1, Page2, setPage2, Page3, setPage3, Page4, setPage4, Page5, setPage5, Page6, setPage6}}>
            {props.children}
           </GlobalContext.Provider>
}



export default GlobalProvider;