import { useParams } from 'react-router-dom';

import { AnimatedPage } from '../../components/ui/animatedPage';
import { Dashboard } from '../../components/ui/dashboard';

export function SpecificPage() {
  const { symbol } = useParams();

  return (
    <AnimatedPage>
      <Dashboard symbol={symbol as string} />
    </AnimatedPage>
  );
}
