import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import Apps from './pages/Apps';
import Widgets from './pages/Widgets';
import Ecommerce from './pages/Ecommerce';
import Pages from './pages/Pages';
import Features from './pages/Features';
import Icons from './pages/Icons';
import Card from './pages/Card';
import Components from './pages/Components';
import Charts from './pages/Charts';
import FormsTables from './pages/FormsTables';
import Home from './pages/Home';
import Proposals from './pages/Proposals';
import AddProposal from './pages/AddProposal';
import UserHome from './pages/UserHome';
import PricingPlans from './pages/PricingPlans';
import BrowseProfiles from './pages/BrowseProfiles';
import Chat from './pages/Chat';
import Login from './pages/Login';
import SoulMatchHome from './pages/SoulMatchHome';
import PlanAnalytics from './pages/PlanAnalytics';
import CustomerAnalytics from './pages/CustomerAnalytics';
import Settings from './pages/Settings';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="support" element={<Support />} />
          <Route path="apps" element={<Apps />} />
          <Route path="widgets" element={<Widgets />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="pages" element={<Pages />} />
          <Route path="features" element={<Features />} />
          <Route path="icons" element={<Icons />} />
          <Route path="card" element={<Card />} />
          <Route path="components" element={<Components />} />
          <Route path="charts" element={<Charts />} />
          <Route path="forms-tables" element={<FormsTables />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Proposals" element={<Proposals />} />
          <Route path="/Add-Proposal" element={<AddProposal />} />
          <Route path="/PlanAnalytics" element={<PlanAnalytics/>} />
          <Route path="/Customer-Analytics" element={<CustomerAnalytics/>} />
          <Route path="/Settings" element={<Settings/>} />
          <Route path="/Messages" element={<Messages/>} />
        </Route>
          <Route path="/User-Home" element={<UserHome />} />
          <Route path="/pricing" element={<PricingPlans />} />
<Route path="/browse-profiles" element={<BrowseProfiles />} />
<Route path="/chat/:id" element={<Chat />} />
  <Route path="/login" element={<Login />} />
  <Route path="/soulmatch" element={<SoulMatchHome />} />


      </Routes>
    </Router>
  );
}

export default App;