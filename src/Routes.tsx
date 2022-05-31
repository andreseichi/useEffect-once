import { Routes as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NormalUsage } from './pages/NormalUsage';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/normal" element={<NormalUsage />} />
    </Router>
  );
}
