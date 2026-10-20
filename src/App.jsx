import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import RuleDetailsPage from './pages/public/RuleDetailsPage';
import RulesListPage from './pages/public/RulesListPage';

import CreateRulePage from './pages/user/CreateRulePage';
import FavoritesPage from './pages/user/FavoritesPage';
import MyRulesPage from './pages/user/MyRulesPage';
import ProfilePage from './pages/user/ProfilePage';

import AllRulesPage from './pages/admin/AllRulesPage';
import UsersDetailPage from './pages/admin/UsersDetailPage';
import UsersListPage from './pages/admin/UsersListPage';

function App() {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<RulesListPage />} />
          <Route path="/rules/:id" element={<RuleDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/rules/create" element={<CreateRulePage />} />
          <Route path="/rules/edit/:id" element={<CreateRulePage />} />
          <Route path="/my-rules" element={<MyRulesPage />} />

          <Route path="/admin/rules" element={<AllRulesPage />} />
          <Route path="/admin/users" element={<UsersListPage />} />
          <Route path="/admin/users/:id" element={<UsersDetailPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;