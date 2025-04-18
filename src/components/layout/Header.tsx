import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu as MenuIcon, X, ChevronDown, User } from 'lucide-react';
import { categories } from '../../data/categories';
import { supabase } from '../../lib/supabase';

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
            <Link to="/" className="text-2xl font-bold">PickBazar</Link>
          </div>

          <div className="hidden lg:flex flex-1 items-center gap-8 max-w-4xl mx-8">
            <div className="relative group">
              <button
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                onBlur={() => setTimeout(() => setIsCategoryOpen(false), 200)}
              >
                <MenuIcon className="h-5 w-5" />
                Categories
                <ChevronDown className="h-4 w-4" />
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border rounded-lg shadow-lg py-2 mt-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50"
                    >
                      {React.createElement(category.icon, { className: 'h-5 w-5' })}
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/" className="text-gray-600 hover:text-gray-900">Shops</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Offers</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">FAQ</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-48 lg:w-64 rounded-lg border border-gray-200 py-2 pl-4 pr-10 focus:border-blue-500 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-2"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                onBlur={() => setTimeout(() => setIsUserMenuOpen(false), 200)}
              >
                <User className="h-6 w-6" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border">
                  {user ? (
                    <>
                      <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        My Account
                      </Link>
                      <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        My Orders
                      </Link>
                      <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        My Wishlist
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Login
                      </Link>
                      <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <button className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col gap-4">
              <div className="px-4 py-2 font-medium">Categories</div>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-50 flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {React.createElement(category.icon, { className: 'h-5 w-5' })}
                  {category.name}
                </Link>
              ))}
              <div className="border-t my-2"></div>
              <Link to="/" className="px-4 py-2 text-gray-600 hover:bg-gray-50">Shops</Link>
              <Link to="/" className="px-4 py-2 text-gray-600 hover:bg-gray-50">Offers</Link>
              <Link to="/" className="px-4 py-2 text-gray-600 hover:bg-gray-50">FAQ</Link>
              <Link to="/contact" className="px-4 py-2 text-gray-600 hover:bg-gray-50">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}