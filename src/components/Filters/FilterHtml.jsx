import { useState, useEffect } from "react";
import FilterItems from "./FilterItems";

const filterHtml = ({filterChange}) => {
    return (
        <>
            <details>
                <summary>Global</summary>
                <ul>
                    <li>
                        <details>
                            <summary>Country</summary>
                            <ul>
                                <li>
                                    <button onClick={(e) => filterChange(1, "country")}>Haiti</button>
                                    <details>
                                        <summary>Department</summary>
                                        <ul>
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