import { useState, useEffect } from "react";
import FilterItems from "./FilterItems";
import css from './Filters.css'

const filterHtml = ({filterChange}) => {
    return (
        <>
            <details>
                <summary className='summary'>Global</summary>
                <ul>
                    <li>
                        <details>
                            <summary className='country'>Country</summary>
                            <ul>
                                <li>
                                    <button className='haitiBtn' onClick={(e) => filterChange(1, "country")}>Haiti</button>
                                    <details>
                                        <summary className='department'>Department</summary>
                                        <ul className='dropdown'>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                            <li>6</li>
                                            <li>7</li>
                                            <li>8</li>
                                            <li>9</li>
                                            <li>10</li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>   
            </details>
        
        </>

    )
}

export default filterHtml