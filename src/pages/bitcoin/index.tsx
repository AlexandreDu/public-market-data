import { AnimatedPage } from '../../components/ui/animatedPage';
import { Dashboard } from '../../components/ui/dashboard';

export function BitcoinPage() {
  return (
    <AnimatedPage>
      <Dashboard symbol="btceur" />
    </AnimatedPage>
  );
}
