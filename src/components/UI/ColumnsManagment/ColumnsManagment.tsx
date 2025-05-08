import React, { useState } from 'react';
import { Popup } from '../Popup/Popup.tsx';
import { Icon } from 'components/icons/Icon.tsx';
import { StyledColumnsManagmentWrapper, StyledLabel } from './ColumnsManagment.styles.ts';

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
  const [open, setOpen] = useState(false);

  return (
    <StyledColumnsManagmentWrapper $active={open} onClick={() => setOpen((prev) => !prev)}>
      <Icon name='Filter' width={16} height={16} fill='#1d1f24' />
      <StyledLabel>Columns</StyledLabel>
      <Popup isOpen={open} onClose={() => setOpen(false)}>
        <div style={{ padding: '12px', minWidth: '220px' }}>
          <strong>Manage Columns</strong>
          <div style={{ marginTop: '10px' }}>
            {columns.map((col) => (
              <label
                key={col.field_key}
                style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}
              >
                <input
                  type='checkbox'
                  checked={col.visible}
                  onChange={(e) => {
                    e.stopPropagation(); // Prevent popup toggle
                    onToggleColumn(col.field_key);
                  }}
                  style={{ marginRight: '8px' }}
                />
                {col.field_key}
              </label>
            ))}
          </div>
        </div>
      </Popup>
    </StyledColumnsManagmentWrapper>
  );
};

export default ColumnsManagment;
