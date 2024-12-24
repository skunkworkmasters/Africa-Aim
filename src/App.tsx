import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import FeaturedSection from './components/landing/FeaturedSection';
import Marketplace from './pages/Marketplace';
import ProviderDirectory from './pages/ProviderDirectory';
import Hub from './pages/Hub';
import Pricing from './pages/Pricing';
import CoursesMarketplace from './pages/courses/CoursesMarketplace';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ProviderDashboard from './pages/dashboard/ProviderDashboard';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Features />
                      <Stats />
                      <FeaturedSection />
                    </>
                  } />
                  <Route path="/hub" element={<Hub />} />
                  <Route path="/marketplace" element={
                    <ProtectedRoute>
                      <Marketplace />
                    </ProtectedRoute>
                  } />
                  <Route path="/directory" element={<ProviderDirectory />} />
                  <Route path="/courses" element={<CoursesMarketplace />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/register" element={<RegisterForm />} />
                  <Route path="/provider/dashboard" element={
                    <ProtectedRoute>
                      <ProviderDashboard />
                    </ProtectedRoute>
                  } />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;