import { Icon } from 'components/icons/Icon';
import React, { useState } from 'react';

import { Popup } from '../Popup/Popup';
import { StyledColumnsManagmentWrapper, StyledLabel } from './ColumnsManagment.styles';

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
    <StyledColumnsManagmentWrapper $active={isOpen}>
      <div onClick={togglePopup}>
        <Icon name='Filter' width={16} height={16} fill='#1d1f24' />
        <StyledLabel>Columns</StyledLabel>
      </div>

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
    </StyledColumnsManagmentWrapper>
  );
};

export default ColumnsManagment;
