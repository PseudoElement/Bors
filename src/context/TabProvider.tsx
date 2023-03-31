import { useState, createContext, FC, ReactNode, Dispatch, SetStateAction } from "react";


interface TabProviderProps {
    children: ReactNode
}

interface TabContextProps {
    activeTab: string
    setActiveTab: Dispatch<SetStateAction<string>>
}

export const TabContext = createContext<TabContextProps>({} as TabContextProps)

export const TabProvider: FC<TabProviderProps> = ({ children }) => {

    const [activeTab, setActiveTab] = useState<string>('Buy Stocks')

    const value = { activeTab, setActiveTab }

    return <TabContext.Provider value={value}>{children}</TabContext.Provider>

}