import Header from '../components/UI/Header';
import TabsBar from '../components/UI/TabsBar';

export default function HeaderContainer() {
  return (
    <div>
      <Header
        Links={[
          { to: '/drivers', label: 'drivers' },
          { to: '/maids', label: 'maids' },
          { to: '/nanies', label: 'nanies' },
        ]}
      />
      <TabsBar />

      <div
        style={{
          backgroundColor: 'white',
          height: '400px',
        }}
      ></div>
    </div>
  );
}
