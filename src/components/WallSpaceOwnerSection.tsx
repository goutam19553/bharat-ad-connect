
import React from 'react';
import WallSpaceListingForm from './WallSpaceListingForm';
import { DollarSign, Image, Briefcase } from 'lucide-react';

const WallSpaceOwnerSection = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            List Your Wall Space & Earn Passive Income
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Turn your unused wall space into a profitable asset. Join our platform and connect with advertisers looking for prime advertising locations.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Earn Passive Income</h3>
            <p className="text-slate-600">
              Generate steady monthly income by renting out your wall space to advertisers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Listing Process</h3>
            <p className="text-slate-600">
              List your wall space in minutes with our simple upload process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Briefcase className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Management</h3>
            <p className="text-slate-600">
              We handle everything from advertiser relations to payment collection.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            List Your Wall Space
          </h2>
          <WallSpaceListingForm />
        </div>
      </div>
    </div>
  );
};

export default WallSpaceOwnerSection;
