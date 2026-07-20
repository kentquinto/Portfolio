import { Analytics } from '@vercel/analytics/react';
import { Portfolio } from '@/components/layout/Portfolio';

function App() {
  return (
    <>
      <Portfolio />
      <Analytics />
    </>
  );
}

export default App;
