import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-600 mb-2">123 Main Street</p>
              <p className="text-gray-600 mb-2">New York, NY 10001</p>
              <p className="text-gray-600 mb-2">+1 234 567 8900</p>
              <p className="text-gray-600">support@pickbazar.com</p>
            </address>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact Us</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Latest News</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Returns Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
            <p className="text-gray-600 mb-4">Get the latest updates, news and product offers via email</p>
            <form className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark flex items-center gap-2"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-gray-600">© 2025 PickBazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}