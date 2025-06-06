import React, { useState, useMemo } from 'react';
import { Popup } from 'components/UI/Popup';
import { StyledLabel } from 'components/Forms/Login/Login.styles';
import { FilterItemProps } from '../FilterItem/FilterItem.types';
import { useAdvancedFilter } from 'hooks/useAdvancedFilters';
import SortableGroup from './components/SortableGroup';
import { Container, StyledFilterWrapper } from './AdvancedFilter.styles';
import { Icon } from 'components/UI/Icon/Icon';

const AdvancedFilter: React.FC<FilterItemProps> = ({ dataState, value, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    ruleset,
    updateGroupOrder,
    addItem,
    addGroup,
    handleDelete,
    handleUpdateConjunction,
    updateItem,
  } = useAdvancedFilter(value, handleChange);

  const togglePopup = () => setIsOpen((prev) => !prev);
  const closePopup = () => setIsOpen(false);

  const hasChildren = useMemo(() => ruleset?.children?.length > 0, [ruleset?.children?.length]);

  return (
    <StyledFilterWrapper $active={isOpen} onClick={togglePopup}>
      <Icon name='FunnelSimple' width={16} height={16} />
      <StyledLabel>Filter</StyledLabel>
      <Popup isOpen={isOpen} onClose={closePopup}>
        <Container hasChildren={hasChildren}>
          <SortableGroup
            group={ruleset}
            level={0}
            index={0}
            dataState={dataState}
            updateGroupOrder={updateGroupOrder}
            addItem={addItem}
            addGroup={addGroup}
            handleDelete={handleDelete}
            handleUpdateConjunction={handleUpdateConjunction}
            updateItem={updateItem}
          />
        </Container>
      </Popup>
    </StyledFilterWrapper>
  );
};

export default AdvancedFilter;
