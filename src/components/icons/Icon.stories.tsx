import * as Icons from './index';

export default {
  title: 'Icons',
};

export const AllIcons = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
    {Object.entries(Icons).map(([name, Component]) => (
      <div key={name} style={{ textAlign: 'center' }}>
        <Component width={32} height={32} />
        <div style={{ fontSize: 12 }}>{name}</div>
      </div>
    ))}
  </div>
);
