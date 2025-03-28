import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider as OriginalAuthProvider } from './contexts/AuthContext';
import { AuthProvider as SupabaseAuthProvider } from './contexts/SupabaseAuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import FeaturedSection from './components/landing/FeaturedSection';
import Hub from './pages/Hub';
import SupabaseAuthForm from './components/auth/SupabaseAuthForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AuthRequiredRoute from './components/auth/AuthRequiredRoute';
import ProviderDashboard from './pages/dashboard/ProviderDashboard';
import CommunityPage from './pages/dashboard/CommunityPage';
import AuthButtons from './components/auth/AuthButtons';
import PostsList from './components/examples/PostsList';
import ModelsList from './components/examples/ModelsList';
import SupabaseDebugPage from './pages/SupabaseDebugPage';

function App() {
  return (
    <ThemeProvider>
      <OriginalAuthProvider>
        <SupabaseAuthProvider>
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
                    <Route path="/hub" element={
                      <AuthRequiredRoute allowForumOnly={true}>
                        <Hub />
                      </AuthRequiredRoute>
                    } />
                    <Route path="/login" element={<SupabaseAuthForm />} />
                    <Route path="/provider/dashboard" element={
                      <ProtectedRoute>
                        <ProviderDashboard />
                      </ProtectedRoute>
                    } />
                    <Route path="/provider/community" element={
                      <ProtectedRoute>
                        <CommunityPage />
                      </ProtectedRoute>
                    } />
                    {/* Supabase Example Routes */}
                    <Route path="/supabase-auth" element={<AuthButtons />} />
                    <Route path="/supabase-posts" element={<PostsList />} />
                    <Route path="/supabase-models" element={<ModelsList />} />
                    <Route path="/supabase-debug" element={<SupabaseDebugPage />} />
                    {/* Catch-all route for non-existent pages */}
                    <Route path="*" element={
                      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Page Not Found</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">The page you're looking for doesn't exist or has been removed.</p>
                        <Link to="/" className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                          Return to Home
                        </Link>
                      </div>
                    } />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </ToastProvider>
        </SupabaseAuthProvider>
      </OriginalAuthProvider>
    </ThemeProvider>
  );
}

export default App;
