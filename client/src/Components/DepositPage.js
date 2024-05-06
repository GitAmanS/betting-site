import React, { useState } from 'react';

const DepositPage = () => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handlePayment = () => {
        // Implement payment processing logic here
    };

    return (
        <div className="container mx-auto px-4 max-w-screen-lg">
            <h1 className="text-3xl font-bold mt-8 mb-4">Deposit Page</h1>
            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-xl font-semibold mb-4">Enter Deposit Amount</h2>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                    <span className="text-gray-500 mr-2">$</span>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="Enter amount"
                        className="flex-grow outline-none"
                    />
                </div>
                <button
                    onClick={handlePayment}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default DepositPage;
