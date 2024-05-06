import React, { useState } from 'react';
import BetCard from './BetCard'; // Assuming BetCard component is in a separate file
import BetModal from './BetModal';

const BetsGrid = ({ bets }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBet = () => {
      setIsModalOpen(true);
    };
  
    const handleBetConfirm = (amount) => {
      // Perform bet confirmation logic here
      console.log("Bet confirmed with amount:", amount);
      // Close the modal after confirmation
      setIsModalOpen(false);
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 py-12">
            {bets.map((bet, index) => (
                <BetCard 
                    key={index} 
                    teamOneName={bet.teamOneName} 
                    teamOneLogo={bet.teamOneLogo} 
                    teamTwoName={bet.teamTwoName} 
                    teamTwoLogo={bet.teamTwoLogo} 
                    closingTime={bet.closingTime} 
                    onBet={handleBet}
                />
            ))}

            {/* Bet Modal */}
            <BetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleBetConfirm} />
        </div>
    );
};

export default BetsGrid;
