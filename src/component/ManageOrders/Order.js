import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Order = ({ order }) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://quiet-bastion-48114.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);
    const handleDelete = id => {
        const process = window.confirm('Are you sure');
        if (process) {
            const url = `https://quiet-bastion-48114.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.alert("Item has been deleted");
                        const remOrder = orders.filter(user => user._id !== id);
                        setOrders(remOrder);

                    }
                })
        }
    }
    const handleUpdate = id => {
        const process = window.confirm('Are you sure to confirm the order');

        if (process) {
            const url = `https://quiet-bastion-48114.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {

                })
        }
    }
    return (
        <>
            <tr>
                <td>{order.product_name}</td>
                <td>{order.price}</td>
                <td className={order.status === 'Confirmed' ? 'md:table-cell text-green-500 border-2 border-green-500' : 'hidden md:table-cell text-yellow-500'}>{order.status}</td>
                <td className="hidden md:table-cell">{order.useremail}</td>
                <td className="hidden md:table-cell">{order.username}</td>
                <td>
                    <button className="bg-yellow-300 px-4 py-2 text-white mr-2"><FontAwesomeIcon icon={faEdit} onClick={() => handleUpdate(order._id)} /></button>
                    <button className="bg-red-300 px-4 py-2 text-white"><FontAwesomeIcon icon={faWindowClose} onClick={() => handleDelete(order._id)} /></button>
                </td>
            </tr>

        </>
    );
};

export default Order;