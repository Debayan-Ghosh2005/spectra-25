import React, { useState, FormEvent } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration (move to a separate file in production)
const firebaseConfig = {
  apiKey: "AIzaSyCYfOtBqd4kKuQgmotYuRiHNtFQSnx2iz0",
  authDomain: "spectra25-fb7cf.firebaseapp.com",
  projectId: "spectra25-fb7cf",
  storageBucket: "spectra25-fb7cf.appspot.com",
  messagingSenderId: "189531230803",
  appId: "1:189531230803:web:81978d30b5001ec0586ca6",
  measurementId: "G-41XLWDDW7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface TeamRegistrationData {
  teamName: string;
  name1: string;
  name2: string;
  college?: string;
  department: string;
  email: string;
  phone1: string;
  phone2: string;
  transactionId: string;
  paymentMethod: 'online' | 'offline';
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<TeamRegistrationData>({
    teamName: '',
    name1: '',
    name2: '',
    college: '',
    department: '',
    email: '',
    phone1: '',
    phone2: '',
    transactionId: '',
    paymentMethod: 'offline'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const requiredFields: (keyof TeamRegistrationData)[] = [
        'teamName', 'name1', 'name2', 'department',
        'email', 'phone1', 'phone2'
      ];

      // Only add transactionId to required fields if payment method is 'online'
      if (formData.paymentMethod === 'online') {
        requiredFields.push('transactionId');
      }

      const missingFields = requiredFields.filter(field => !formData[field]?.trim());
      
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        throw new Error('Invalid email format');
      }

      console.log('Submitting data:', formData);
      
      const docRef = await addDoc(collection(db, "registrations"), {
        ...formData,
        timestamp: new Date().toISOString()
      });
      
      console.log('Document written with ID: ', docRef.id);
      
      setFormData({
        teamName: '',
        name1: '',
        name2: '',
        college: '',
        department: '',
        email: '',
        phone1: '',
        phone2: '',
        transactionId: '',
        paymentMethod: 'offline'
      });
      
      setSubmitStatus('success');
    } catch (error: any) {
      console.error('Detailed Registration Error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 lg:p-8 	">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 mt-20" >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">
            Team Registration
          </h2>
          <p className="text-gray-600 mt-2">
            Fill out the form to register your team
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Payment Method Selection */}
          <div className="space-y-2">
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
              Payment Method <span className="text-red-500">*</span>
            </label>
            <select
              id="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              required
            >
              <option value="offline">Offline</option>
              <option value="online">Online</option>
            </select>
          </div>

          {/* QR Code for Online Payment */}
          {formData.paymentMethod === 'online' && (
            <div className="bg-blue-50 p-4 rounded-md text-center space-y-3">
              <p className="text-gray-700 font-medium">
                Scan the QR code below to make the payment:
              </p>
              <img
                src="https://via.placeholder.com/150x150.png?text=Payment+QR+Code"
                alt="Payment QR Code"
                className="mx-auto w-40 h-40 rounded-md shadow-sm"
              />
              <p className="text-gray-600 text-sm">
                After completing the payment, enter the Transaction ID below.
              </p>
            </div>
          )}

          {/* Form Fields - 3 per row */}
          <div className="space-y-4">
            {/* Row 1: teamName, name1, name2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">
                  Team Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="teamName"
                  type="text"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="Enter team name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="name1" className="block text-sm font-medium text-gray-700">
                  Member 1 Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name1"
                  type="text"
                  value={formData.name1}
                  onChange={handleChange}
                  placeholder="Enter member 1 name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="name2" className="block text-sm font-medium text-gray-700">
                  Member 2 Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name2"
                  type="text"
                  value={formData.name2}
                  onChange={handleChange}
                  placeholder="Enter member 2 name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Row 2: college, department, email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label htmlFor="college" className="block text-sm font-medium text-gray-700">
                  College
                </label>
                <input
                  id="college"
                  type="text"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter college name (optional)"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department <span className="text-red-500">*</span>
                </label>
                <input
                  id="department"
                  type="text"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Enter department"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Row 3: phone1, phone2, and transactionId (only for online) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label htmlFor="phone1" className="block text-sm font-medium text-gray-700">
                  Member 1 Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone1"
                  type="tel"
                  value={formData.phone1}
                  onChange={handleChange}
                  placeholder="Enter member 1 phone"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="phone2" className="block text-sm font-medium text-gray-700">
                  Member 2 Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone2"
                  type="tel"
                  value={formData.phone2}
                  onChange={handleChange}
                  placeholder="Enter member 2 phone"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
              {/* Conditionally render transactionId input only for online payment */}
              {formData.paymentMethod === 'online' && (
                <div className="space-y-1">
                  <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">
                    Transaction ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="transactionId"
                    type="text"
                    value={formData.transactionId}
                    onChange={handleChange}
                    placeholder="Enter transaction ID (required)"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-md text-white font-semibold transition-all duration-300 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Registration'
            )}
          </button>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Registration successful! Thank you for registering.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              Registration failed: {errorMessage || 'Please check your information and try again.'}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;