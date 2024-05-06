import React, { useState } from 'react';
const imagelink = "teamimage.png"




const BetCard = ({ betTitle, teamOneName, teamOneLogo, teamTwoName, teamTwoLogo, closingTime, onBet  }) => {
    return (
        <div className="bet-card bg-gradient-to-r from-indigo-700 to-pink-500 text-white rounded-lg  shadow-md">
            <h1 className="text-xl text-center p-2 ">Bet Title</h1>
            <div className="flex justify-between border-b py-4 mx-4 border-t px-8">
                <div className="flex flex-col items-center gap-2">
                    <div className='rounded-full border-dashed  border-4 h-20 w-20 flex items-center justify-center'>
                        <img src={imagelink} alt={teamOneName} className="w-14 h-14 rounded-full " />
                    </div>
                    
                    <h2 className="text-sm">{teamOneName}</h2>
                    <h2 className='text-sm'>1:1.8</h2>
                    <button onClick={onBet} className="bet-button bg-blue-400 text-white rounded-lg px-4 py-2 mt-2  text-lg font-semibold">BET</button>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className='rounded-full border-dashed  border-4 h-20 w-20 flex items-center justify-center'>
                        <img src={imagelink} alt={teamOneName} className="w-14 h-14 rounded-full " />
                    </div>
                    
                    <h2 className="text-sm">{teamTwoName}</h2>
                    <h2 className='text-sm'>1:1.8</h2>
                    <button onClick={onBet} className="bet-button bg-blue-400 text-white rounded-lg px-4 py-2 mt-2  text-lg font-semibold">BET</button>
                </div>
            </div>
            <div className="flex flex-row text-center text-sm justify-between items-center my-2 px-8 py-4"> 
                <span>
                Bet Closing Time: 
                </span>
                <span>
                {closingTime}
                </span>
            </div>
        </div>
    );
};

export default BetCard;
