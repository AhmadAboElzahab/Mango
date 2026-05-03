import type React from 'react';
import { useState } from 'react';

import { Icon } from '../Icon/Icon';
import { Popup } from '../Popup/Popup';

interface Column {
  field_key: string;
  visible: boolean;
  locked: boolean;
  order: number;
  width: number;
}

interface ColumnsManagmentProps {
  columns: Column[];
  onToggleColumn: (fieldKey: string) => void;
}

const ColumnsManagment: React.FC<ColumnsManagmentProps> = ({ columns, onToggleColumn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen((prev) => !prev);
  const closePopup = () => setIsOpen(false);

  return (
    <div
      className={`relative items-center justify-center flex flex-row cursor-pointer rounded-[3px] px-2 py-1 h-fit transition-[background-color] duration-85 ease-in ${
        isOpen
          ? 'bg-[#cff5d1] hover:bg-transparent hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]'
          : 'hover:bg-black/5'
      }`}
      onClick={togglePopup}
    >
      <Icon name='Eye' width={16} height={16} fill='#1d1f24' />
      <span className='ml-1 text-[13px] text-[#1d1f24] font-normal'>Columns</span>

      <Popup isOpen={isOpen} onClose={closePopup}>
        <div style={{ padding: '12px', minWidth: '220px', maxHeight: '300px', overflowY: 'auto' }}>
          <strong>Manage Columns</strong>
          <div style={{ marginTop: '10px' }}>
            {columns.map(({ field_key, visible }) => (
              <label
                key={field_key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '6px',
                  cursor: 'pointer',
                }}
              >
                <input
                  type='checkbox'
                  checked={visible}
                  onChange={(e) => {
                    e.stopPropagation();
                    onToggleColumn(field_key);
                  }}
                  style={{ marginRight: '8px' }}
                />
                {field_key}
              </label>
            ))}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ColumnsManagment;
