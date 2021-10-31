import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Order = ({ order }) => {
    return (
        <>
            <tr>
                <td>{order.product_name}</td>
                <td>{order.price}</td>
                <td className="hidden md:table-cell">{order.status}</td>
                <td className="hidden md:table-cell">{order.useremail}</td>
                <td className="hidden md:table-cell">{order.username}</td>
                <td>
                    <button className="bg-yellow-300 px-4 py-2 text-white mr-2"><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="bg-red-300 px-4 py-2 text-white"><FontAwesomeIcon icon={faWindowClose} /></button>
                </td>
            </tr>

        </>
    );
};

export default Order;