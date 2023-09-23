import React from "react"
import ThreeLists from "./Components/ThreeLists/ThreeLists"
import { AppProvider } from "./AppContext"
function App () 
{
    return (
        <AppProvider>
            <ThreeLists />
        </AppProvider>
    )
}

export default App
