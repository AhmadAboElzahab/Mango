import React from 'react';

interface AddMenuProps {
  onAddItem: () => void;
  onAddGroup: () => void;
  canAddGroup: boolean;
}

const AddMenu: React.FC<AddMenuProps> = ({ onAddItem, onAddGroup, canAddGroup }) => (
  <div
    style={{
      position: 'absolute',
      right: '2.5rem',
      background: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000000000000,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      padding: '1rem 0.5rem',
    }}
  >
    <button
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '0.25rem 0.75rem',
        borderRadius: '0.5rem',
      }}
      onClick={onAddItem}
    >
      Add condition
    </button>
    <button
      disabled={!canAddGroup}
      style={{
        width: '100%',
        textAlign: 'left',
        padding: '0.25rem 0.75rem',
        borderRadius: '0.5rem',
        opacity: canAddGroup ? 1 : 0.4,
        pointerEvents: canAddGroup ? 'auto' : 'none',
      }}
      onClick={onAddGroup}
    >
      Add condition group
    </button>
  </div>
);

export default AddMenu;
