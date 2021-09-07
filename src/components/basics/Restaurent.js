import React, { useState } from 'react'
import "./style.css"
import Menu from "./MenuApi"
import MenuCard from './MenuCard'
import NavBar from './NavBar'

const uniqueList = [
    ...new Set( // here ... is spread operator
        Menu.map((menu) => {
            return menu.category
        })
    ), "All"
]

const Restaurent = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu)
            return
        }
        const updatedList = Menu.filter((menu) => {
            return menu.category === category
        })
        setMenuData(updatedList)
    }
    return (
        <React.Fragment>
            <NavBar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </React.Fragment>
    )
}

export default Restaurent
