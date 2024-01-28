import React, { useState, useEffect } from 'react';
import { valueAtom } from '@/components/atoms/valueAtom';
import { useAtom } from 'jotai';

// Define the type for individual data items
interface FinancialDataItem {
  sector: string;
  value: number;
}

// Define the type for the props
interface AssetSliderProps {
  financialData: FinancialDataItem[];
  onPortfolioUpdate: (data: FinancialDataItem[]) => void;
}

const AssetSlider: React.FC<AssetSliderProps> = ({ financialData, onPortfolioUpdate }) => {
  const [portfolioValue, setValue] = useAtom(valueAtom);
  

  const [values, setValues] = useState<FinancialDataItem[]>(financialData);
  const [totalAllocation, setTotalAllocation] = useState<number>(
    financialData.reduce((acc, item) => acc + item.value, 0)
  );
  const [updateStatus, setUpdateStatus] = useState<string>('');

  useEffect(() => {
    setValues(financialData);
    setTotalAllocation(financialData.reduce((acc, item) => acc + item.value, 0));
  }, [financialData]);

  const handleSliderChange = (sector: string, newValue: number) => {
    const newValues = values.map(item =>
      item.sector === sector ? { ...item, value: newValue } : item
    );
    setValues(newValues);
    setTotalAllocation(newValues.reduce((acc, item) => acc + item.value, 0));
  };

  const handleSavePortfolio = () => {
    if (totalAllocation === portfolioValue) {  // Check if total allocation is 1,000,000
      onPortfolioUpdate(values);
      setUpdateStatus('Portfolio updated successfully!');
    } else {
      setUpdateStatus(`Total allocation must be exactly ${portfolioValue}.`);
    }
  };

  return (
    <div>
      {values.map((item) => (
        <div key={item.sector}>
          <label>{item.sector}: {item.value}</label>
          <input
            type="range"
            min="0"
            max="500000"  // Adjust max value to 1,000,000
            step="10000"
            value={item.value}
            onChange={(e) => handleSliderChange(item.sector, parseInt(e.target.value))}
            style={{ width: '300px' }}  // Adjust the width as needed
          />
        </div>
      ))}
      <div>Total Allocated: {totalAllocation}/{portfolioValue}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
        <button 
          onClick={handleSavePortfolio}
          style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Save Portfolio
        </button>
        <span>{updateStatus}</span>
      </div>
    </div>
  );
};

export default AssetSlider;


