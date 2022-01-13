import React, { useContext, useState }  from "react"
import { characters }              from "../db/characters_data"

const UserStateContext = React.createContext();

export function UserStateProvider({ children }) {
    const [items] = useState(characters)

    return (
        <UserStateContext.Provider
            value={{
                items
            }}
        >
            { children }
        </UserStateContext.Provider>
    )
}

export function useUserState() {
    return useContext(UserStateContext);
}