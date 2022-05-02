import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;
    // useEffect, first parameter is a callback function. Second parameter is the what will trigger a rerender if changed (ie currentCategory)
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory])
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/" data-testid="link">
                    <span role="img" aria-label="camera">
                        {" "}
                        📸 
                        </span> {" "}
                        Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" data-testid="about"
                        onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li>
                        <span className={`mx-2 ${contactSelected && 'navActive'}`}  onClick={() => setContactSelected(true)}
                        >Contact</span>
                    </li>
                    {categories.map((category) => (
                        // if currentCategory name is category.name, then the 'navActive' will be evaluated. 
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span onClick={() => {setCurrentCategory(category)
                                setContactSelected(false)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;