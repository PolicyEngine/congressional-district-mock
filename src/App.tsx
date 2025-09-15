import React, { useState, useEffect } from 'react';
import './App.css';
import DistrictSetup from './components/DistrictSetup';
import ActiveBills from './components/ActiveBills';
import BillImpact from './components/BillImpact';
import DemoModeBanner from './components/DemoModeBanner';
import { CongressionalDistrict } from './data/congressionalDistricts';
import { FederalBill } from './data/federalBills';

type PageType = 'setup' | 'bills' | 'impact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('setup');
  const [selectedDistrict, setSelectedDistrict] = useState<CongressionalDistrict | null>(null);
  const [selectedBill, setSelectedBill] = useState<FederalBill | null>(null);
  const [isAutoDemo, setIsAutoDemo] = useState(false);

  // Check for auto-demo mode in URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autodemo') === 'true') {
      setIsAutoDemo(true);
    }
  }, []);

  const handleDistrictSelect = (_state: string, district: CongressionalDistrict) => {
    setSelectedDistrict(district);
    setCurrentPage('bills');
  };

  const handleBillSelect = (bill: FederalBill) => {
    setSelectedBill(bill);
    setCurrentPage('impact');
  };

  const handleBack = () => {
    if (currentPage === 'impact') {
      setCurrentPage('bills');
    } else if (currentPage === 'bills') {
      setCurrentPage('setup');
      setSelectedDistrict(null);
    }
  };

  const handleRestart = () => {
    setCurrentPage('setup');
    setSelectedDistrict(null);
    setSelectedBill(null);
  };

  return (
    <div className="App">
      <DemoModeBanner />

      {currentPage === 'setup' && (
        <DistrictSetup
          onDistrictSelect={handleDistrictSelect}
          isAutoDemo={isAutoDemo}
        />
      )}

      {currentPage === 'bills' && selectedDistrict && (
        <ActiveBills
          district={selectedDistrict}
          onBillSelect={handleBillSelect}
          onBack={handleBack}
          isAutoDemo={isAutoDemo}
        />
      )}

      {currentPage === 'impact' && selectedDistrict && selectedBill && (
        <BillImpact
          district={selectedDistrict}
          bill={selectedBill}
          onBack={handleBack}
          onRestart={handleRestart}
          isAutoDemo={isAutoDemo}
        />
      )}
    </div>
  );
}

export default App;
