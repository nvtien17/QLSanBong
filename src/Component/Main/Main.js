import './Main.css'
import ListYard from '../../App/ListYard/ListYard'
import { Link, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { StateContext } from '../../GlobalState';
import Order from '../Order/Order';
import Yard from '../Yard/Yard';
function Main() {

    const context = useContext(StateContext)
    const [isOrder, setIsOrder] = useState(false)

    const handleOrder= (yard) => {
        if(yard.state === 1){
            context.setYard(yard)
            setIsOrder(true)
        }
        
    }
    const handleCloseOrderView = () => {
        setIsOrder(false)
        context.setYard(undefined)
    }
    console.log('isOrder', isOrder);
    return (

        <div className="main">

            <div className="grid wide">
                <div className="row">
                    {ListYard.map((value, key) => (
                        <Yard key={key} value={value} handleOrder={handleOrder}/>
                    ))}
                    {isOrder && <Order handleCloseOrderView={handleCloseOrderView} />}
                </div>
                <Outlet />
            </div>


        </div>
    )
}
export default Main