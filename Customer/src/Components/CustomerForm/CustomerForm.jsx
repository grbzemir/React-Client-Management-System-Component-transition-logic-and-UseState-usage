import React from 'react'
import PropTypes from 'prop-types';
import "./CustomerForm.css"
import { useState } from 'react'

const CustomerForm = ({ addNewCustomer }) => {
    const [customerName, setCustomerName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer =
        {
            id: Math.floor(Math.random() * 1000000),
            customerName: customerName
        };
        addNewCustomer(newCustomer);
        setCustomerName("");

    };
    return (
        <form className="customer-form" onSubmit={handleSubmit}>
            <input type="text" className="customer-input"
                placeholder="Add a new customer"
                onChange={(e) => setCustomerName(e.target.value)}
                value={customerName}
            />

            <button>
                <i className="bi bi-plus-lg"></i>
            </button>
        </form>
    );
};

CustomerForm.propTypes = {
    addNewCustomer: PropTypes.func.isRequired
};

export default CustomerForm
