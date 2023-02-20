import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import { BitcoinPage } from '../../pages/bitcoin';
import { EtherumPage } from '../../pages/etherum';
import { PaxGoldPage } from '../../pages/paxGold';
import { SpecificPage } from '../../pages/specific';

export function ClientRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={'/'} element={<BitcoinPage />} />
        <Route path={'/ethereum'} element={<EtherumPage />} />
        <Route path={'/paxgold'} element={<PaxGoldPage />} />
        <Route path={'/specific/:symbol'} element={<SpecificPage />} />
      </Routes>
    </AnimatePresence>
  );
}
