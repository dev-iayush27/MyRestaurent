import React from 'react'

const NavBar = ({ filterItem, menuList }) => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((curElem) => {
                            return (
                                <button className="btn-group__item" onClick={() => filterItem(curElem)}>{curElem}</button>
                            )
                        })
                    }
                    {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}
                    {/* <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("evening snacks")}>Evening Snacks</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button> */}
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar
