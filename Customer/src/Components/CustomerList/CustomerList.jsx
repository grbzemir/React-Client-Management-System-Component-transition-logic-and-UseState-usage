import React from 'react'
import PropTypes from 'prop-types';
import CustomerItem from '../CustomerItem/CustomerItem'
import "./CustomerList.css"
import { useState } from 'react'


function CustomerList({ customers, setCustomers }) {


    const handleDelete = (item) => {
        console.log(item);
        setCustomers(customers.filter((customer) => customer.id !== item.id));
    };
    return (
        <ul className="customer-list">
            {customers.map((customer) => (
                <CustomerItem customer={customer} key={customer.id}
                    handleDelete={handleDelete} />
            ))}
        </ul>
    );

}

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    setCustomers: PropTypes.func.isRequired
};

export default CustomerList;