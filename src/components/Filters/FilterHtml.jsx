import { useState, useEffect } from "react";
import FilterItems from "./FilterItems";
import css from './FilterHtml.css'


const filterHtml = ({filterChange}) => {
    return (
        <>
            <details className={css.details}>
                <summary>Global</summary>
                <ul className={css.ul}>
                    <li>
                        <details>
                            <summary>Country</summary>
                            <ul>
                                <li>
                                    <button onClick={(e) => filterChange(1, "country")}>Haiti</button>
                                    <details>
                                        <summary>Department</summary>
                                        <ul>
                                            <li>
                                                <details>
                                                    <summary className="css.artbonite">Artbonite</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange(22)}>Deschapelle</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(36)}>Gonaïves</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(21)}>Jean Denis</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(23)}>Marmelade</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(15)}>St.Michel</button>
                                                        </li>
                                                        
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                <details>
                                                    <summary>Centre</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange(13)}>Cerca-Carvajal</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(8)}>Cerca-la-Source</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(12)}>Hinche</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(7)}>Thomassique</button>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                Grande'Anse
                                                {/* <details>
                                                    <summary>Grand'Anse</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li> 
                                                    </ul>
                                                </details> */}
                                            </li>
                                            <li>
                                                Nippes
                                                {/* <details>
                                                    <summary>Nippes</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                    </ul> 
                                                </details> */}
                                            </li>
                                            <li>
                                                <details>
                                                    <summary>Nord</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange(37)}>Bahon</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(33)}>Bas-Limbé</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(19)}>Dondon</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(32)}>Grande Rivière du Nord</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(11)}>Lavictoire</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(28)}>Limonade</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(10)}>Pignon</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(30)}>Plaine du Nord</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(29)}>Quartier-morin</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(20)}>Ranquitte</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(14)}>St-Raphael</button>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                            <details>
                                                    <summary>Nord-Est</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange(9)}>Mombin Crochus</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(34)}>Mont-Organisé</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(25)}>Ouanaminthe</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(35)}>Vallières</button>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                <details>
                                                    <summary>Norde-Ouest</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                Ouest
                                                {/* <details>
                                                    <summary>Ouest</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                    </ul>
                                                </details> */}
                                            </li>
                                            <li>
                                                Sud
                                                {/* <details>
                                                    <summary>Sud</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                    </ul>
                                                </details> */}
                                            </li>
                                            <li>
                                                Sud-Est
                                                {/* <details>
                                                    <summary>Sud-Est</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                    </ul>
                                                </details> */}
                                            </li>
                                            <li>
                                                US Department
                                                {/* <details>
                                                    <summary>US Department</summary>
                                                    <ul>
                                                        <li>
                                                            <button onClick={(e) => filterChange()}>ABCD</button>
                                                        </li>
                                                    </ul>
                                                </details> */}
                                            </li>
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