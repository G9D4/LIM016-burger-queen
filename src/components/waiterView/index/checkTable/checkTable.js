import {React} from "react"
import './checkTable.css'
import { TableHeader } from './tableHeader'
import { TableFooter } from './tableFooter'
import { TablePrice } from './tablePrice'
import { TableRowFood } from './tableRow'

function CheckTable ({productSelect}) {
    return(
        <div className="checkTableDiv">
            <div className="table-flex">
            <div className="checkTableTitle">
                <p className="checkTableP">LISTA DE PEDIDO</p>
                <div className="checkTableInnerDiv">
                    <p className="checkTableP">MESA #</p>
                    <input className="checkTableInp" type='number'></input>
                </div>
            </div>
            <table>
                <TableHeader/>
                <tbody>
                    {productSelect.map((order, index) => (
                    <TableRowFood
                        key={index}
                        producto={order.name}
                        cantidad={order.cantidad}
                        precio={order.total}
                    />
                    ))}
                </tbody>
                <tfoot>
                    <TableFooter/>
                    <TablePrice/>
                </tfoot>
            </table>
            </div>
        </div>
    )
    
}

export { CheckTable }