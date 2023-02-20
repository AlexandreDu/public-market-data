import { AnimatedPage } from '../../components/ui/animatedPage';
import { Dashboard } from '../../components/ui/dashboard';

export function EtherumPage() {
  return (
    <AnimatedPage>
      <Dashboard symbol="etheur" />
    </AnimatedPage>
  );
}
