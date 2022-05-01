import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
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
                        <a href="#about" data-testid="about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        // if currentCategory name is category.name, then the 'navActive' will be evaluated. 
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => setCurrentCategory(category)}>
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