import { useState, useEffect } from "react";
import FilterItems from "./FilterItems";
import './FilterHtml.css'

const filterHtml = ({filterChange}) => {
    return (
        <>

            <details>
                <summary className='summary'>Global</summary>
                <ul className='list'>
                    <li>
                        <details>
                            <summary className='country'>Country</summary>
                            <ul className='list'>
                                <li>
                                    <button className='haitiBtn' onClick={(e) => filterChange(1, "country")}>Haiti</button>
                                    <details>

                                    
                                    <summary>Department</summary>
                                        <ul className='list'>
                                            <li>
                                                <details>
                                                    <summary>Artbonite</summary>
                                                    <ul className='list'>
                                                        <li>
                                                            <button onClick={(e) => filterChange(22,"community")}>Deschapelle</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(36,"community")}>Gonaïves</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(21,"community")}>Jean Denis</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(23,"community")}>Marmelade</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(15,"community")}>St.Michel</button>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                <details>
                                                    <summary>Centre</summary>
                                                    <ul className='list'>
                                                        <li>
                                                            <button onClick={(e) => filterChange(13,"community")}>Cerca-Carvajal</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(8,"community")}>Cerca-la-Source</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(12,"community")}>Hinche</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(7,"community")}>Thomassique</button>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                Grande'Anse
                                                {/* <details>
                                                    <summary>Grand'Anse</summary>
                                                    <ul className='list'>
                                                        <li>
                                                            <button onClick={(e) => filterChange()},"community">ABCD</button>
                                                        </li> 
                                                    </ul>
                                                </details> */}
                                            </li>
                                            <li>
                                                Nippes
                                                {/* <details>
                                                    <summary>Nippes</summary>
                                                    <ul className='list'>
                                                        <li>
                                                            <button onClick={(e) => filterChange()},"community">ABCD</button>
                                                        </li>
                                                    </ul> 
                                                </details> */}
                                            </li>
                                            <li>
                                                <details>
                                                    <summary>Nord</summary>
                                                    <ul className='list'>
                                                        <li>
                                                            <button onClick={(e) => filterChange(37,"community")}>Bahon</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(33,"community")}>Bas-Limbé</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(19,"community")}>Dondon</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(32,"community")}>Grande Rivière du Nord</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(11,"community")}>Lavictoire</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(28,"community")}>Limonade</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(10,"community")}>Pignon</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(30,"community")}>Plaine du Nord</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(29,"community")}>Quartier-morin</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(20,"community")}>Ranquitte</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(14,"community")}>St-Raphael</button>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                            <details>
                                                    <summary>Nord-Est</summary>
                                                    <ul className='list'>
                                                        <li>
                                                            <button onClick={(e) => filterChange(9,"community")}>Mombin Crochus</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(34,"community")}>Mont-Organisé</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(25,"community")}>Ouanaminthe</button>
                                                        </li>
                                                        <li>
                                                            <button onClick={(e) => filterChange(35,"community")}>Vallières</button>
                                                        </li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li> Norde-Ouest
{/* //                                                 <details>
//                                                     <summary>Norde-Ouest</summary>
// //                                                     <ul className='list'>
//                                                         <li>
//                                                             <button onClick={(e) => filterChange()}>ABCD</button>
//                                                         </li>
//                                                         <li>
//                                                             <button onClick={(e) => filterChange()}>ABCD</button>
//                                                         </li>
//                                                         <li>
//                                                             <button onClick={(e) => filterChange()}>ABCD</button>
//                                                         </li>
//                                                         <li>
//                                                             <button onClick={(e) => filterChange()}>ABCD</button>
//                                                         </li>
//                                                     </ul>
//                                                 </details> */}
                                            </li>
                                            <li>
                                                Ouest
                                                {/* <details>
                                                    <summary>Ouest</summary>
                                                    <ul className='list'>
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
                                                    <ul className='list'>
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
                                                    <ul className='list'>
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
                                                    <ul className='list'>
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