import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <MapPin className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Address</h2>
          </div>
          <p className="text-gray-600">123 Main Street</p>
          <p className="text-gray-600">New York, NY 10001</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <Phone className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Phone</h2>
          </div>
          <p className="text-gray-600">+1 234 567 8900</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <Mail className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Email</h2>
          </div>
          <p className="text-gray-600">support@pickbazar.com</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Questions, Comments, Or Concerns?</h2>
        
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const nameInput = form.elements.namedItem("name") as HTMLInputElement | null;
            const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
            const subjectInput = form.elements.namedItem("subject") as HTMLInputElement | null;
            const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement | null;

            let isValid = true;

            if (nameInput) {
              const nameError = nameInput.nextElementSibling as HTMLSpanElement;
              if (!nameInput.value.trim()) {
          nameError.textContent = "Name is required.";
          nameInput.classList.add("border-red-500");
          isValid = false;
              } else {
          nameError.textContent = "";
          nameInput.classList.remove("border-red-500");
              }
            }

            if (emailInput) {
              const emailError = emailInput.nextElementSibling as HTMLSpanElement;
              if (!emailInput.value.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value)) {
          emailError.textContent = "Please enter a valid email address.";
          emailInput.classList.add("border-red-500");
          isValid = false;
              } else {
          emailError.textContent = "";
          emailInput.classList.remove("border-red-500");
              }
            }

            if (subjectInput) {
              const subjectError = subjectInput.nextElementSibling as HTMLSpanElement;
              if (!subjectInput.value.trim()) {
          subjectError.textContent = "Subject is required.";
          subjectInput.classList.add("border-red-500");
          isValid = false;
              } else {
          subjectError.textContent = "";
          subjectInput.classList.remove("border-red-500");
              }
            }

            if (messageInput) {
              const messageError = messageInput.nextElementSibling as HTMLSpanElement;
              if (!messageInput.value.trim()) {
          messageError.textContent = "Message is required.";
          messageInput.classList.add("border-red-500");
          isValid = false;
              } else {
          messageError.textContent = "";
          messageInput.classList.remove("border-red-500");
              }
            }

            if (isValid) {
              alert("Form submitted successfully!");
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
              </label>
              <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your name"
              />
              <span className="text-red-500 text-sm"></span>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
              </label>
              <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your email"
              />
              <span className="text-red-500 text-sm"></span>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter subject"
            />
            <span className="text-red-500 text-sm"></span>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write your message here"
            ></textarea>
            <span className="text-red-500 text-sm"></span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}