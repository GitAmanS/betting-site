import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, Text } from "@chakra-ui/react";

const BetModal = ({ isOpen, onClose, onConfirm, teamName }) => {
  const [betAmount, setBetAmount] = useState(0);

  const handleBetConfirm = () => {
    onConfirm(betAmount);
    setBetAmount(0);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent mx={4} my={8}>
        <ModalHeader fontSize="xl">Team A</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={2}>Amount:</Text>
          <Input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(parseInt(e.target.value))}
            placeholder="Enter bet amount"
          />
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button colorScheme="green" onClick={handleBetConfirm}>
            Confirm Bet
          </Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BetModal;
