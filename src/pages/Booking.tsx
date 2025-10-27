import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type ServiceType = 'residential' | 'commercial' | 'deep' | 'moveInOut' | null;
type Frequency = 'once' | 'weekly' | 'biweekly' | 'monthly' | null;
type PropertySize = 'small' | 'medium' | 'large' | 'xlarge' | null;

const Booking = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [frequency, setFrequency] = useState<Frequency>(null);
  const [propertySize, setPropertySize] = useState<PropertySize>(null);
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const { toast } = useToast();

  const totalSteps = 9;
  const progress = Math.round((step / totalSteps) * 100);

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    // Here you would typically send the data to your backend
    console.log({
      serviceType,
      frequency,
      propertySize,
      bedrooms,
      bathrooms,
      date,
      timeSlot,
      name,
      email,
      phone,
      address,
      notes,
    });
  };

  const canProceed = () => {
    switch (step) {
      case 1: return serviceType !== null;
      case 2: return frequency !== null;
      case 3: return propertySize !== null;
      case 4: return bedrooms !== '' && bathrooms !== '';
      case 5: return date !== undefined;
      case 6: return timeSlot !== '';
      case 7: return name !== '' && email !== '' && phone !== '';
      case 8: return address !== '';
      case 9: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 bg-[#1a3a52] relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
            alt="Clean living room"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#1a3a52]/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="w-full max-w-4xl">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white text-sm font-medium">Step {step} of {totalSteps}</span>
                <span className="text-white text-sm font-medium">{progress}%</span>
              </div>
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold transition-all duration-300 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="bg-transparent">
              {step === 1 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    What type of cleaning do you need?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <button
                      onClick={() => setServiceType('residential')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        serviceType === 'residential'
                          ? 'ring-2 ring-gold shadow-xl'
                          : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Residential Cleaning</h3>
                      <p className="text-gray-600">Homes, apartments, condos</p>
                    </button>
                    <button
                      onClick={() => setServiceType('commercial')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        serviceType === 'commercial'
                          ? 'ring-2 ring-gold shadow-xl'
                          : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Commercial Cleaning</h3>
                      <p className="text-gray-600">Offices, retail spaces</p>
                    </button>
                    <button
                      onClick={() => setServiceType('deep')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        serviceType === 'deep'
                          ? 'ring-2 ring-gold shadow-xl'
                          : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Deep Cleaning</h3>
                      <p className="text-gray-600">Thorough, detailed cleaning</p>
                    </button>
                    <button
                      onClick={() => setServiceType('moveInOut')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        serviceType === 'moveInOut'
                          ? 'ring-2 ring-gold shadow-xl'
                          : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Move In/Out</h3>
                      <p className="text-gray-600">Pre or post-move cleaning</p>
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    How often do you need cleaning?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <button
                      onClick={() => setFrequency('once')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        frequency === 'once' ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">One-Time</h3>
                      <p className="text-gray-600">Single cleaning service</p>
                    </button>
                    <button
                      onClick={() => setFrequency('weekly')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        frequency === 'weekly' ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Weekly</h3>
                      <p className="text-gray-600">Every week</p>
                    </button>
                    <button
                      onClick={() => setFrequency('biweekly')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        frequency === 'biweekly' ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Bi-Weekly</h3>
                      <p className="text-gray-600">Every two weeks</p>
                    </button>
                    <button
                      onClick={() => setFrequency('monthly')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        frequency === 'monthly' ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Monthly</h3>
                      <p className="text-gray-600">Once a month</p>
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    What's the size of your property?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <button
                      onClick={() => setPropertySize('small')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        propertySize === 'small' ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Small</h3>
                      <p className="text-gray-600">Under 1,000 sq ft</p>
                    </button>
                    <button
                      onClick={() => setPropertySize('medium')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        propertySize === 'medium' ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Medium</h3>
                      <p className="text-gray-600">1,000 - 2,000 sq ft</p>
                    </button>
                    <button
                      onClick={() => setPropertySize('large')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        propertySize === 'large' ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Large</h3>
                      <p className="text-gray-600">2,000 - 3,000 sq ft</p>
                    </button>
                    <button
                      onClick={() => setPropertySize('xlarge')}
                      className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                        propertySize === 'xlarge' ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">Extra Large</h3>
                      <p className="text-gray-600">Over 3,000 sq ft</p>
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Number of bedrooms and bathrooms?
                  </h2>
                  <div className="max-w-md mx-auto space-y-6 bg-white p-8 rounded-xl shadow-xl">
                    <div>
                      <Label htmlFor="bedrooms" className="text-lg text-[#1a3a52]">Bedrooms</Label>
                      <Input
                        id="bedrooms"
                        type="number"
                        min="0"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        placeholder="Enter number of bedrooms"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bathrooms" className="text-lg text-[#1a3a52]">Bathrooms</Label>
                      <Input
                        id="bathrooms"
                        type="number"
                        min="0"
                        step="0.5"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                        placeholder="Enter number of bathrooms"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    What date would you like service?
                  </h2>
                  <div className="flex justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-xl">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Preferred time slot?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {['8:00 AM - 12:00 PM', '12:00 PM - 4:00 PM', '4:00 PM - 8:00 PM'].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        className={`p-8 rounded-xl bg-white transition-all hover:shadow-xl ${
                          timeSlot === slot ? 'ring-2 ring-gold shadow-xl' : 'shadow-lg'
                        }`}
                      >
                        <h3 className="text-lg font-bold text-[#1a3a52]">{slot}</h3>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 7 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Your contact information
                  </h2>
                  <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-xl shadow-xl">
                    <div>
                      <Label htmlFor="name" className="text-[#1a3a52]">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#1a3a52]">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#1a3a52]">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 123-4567"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 8 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Service address
                  </h2>
                  <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-xl shadow-xl">
                    <div>
                      <Label htmlFor="address" className="text-[#1a3a52]">Full Address</Label>
                      <Textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street address, apt/suite, city, state, zip"
                        className="mt-2"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 9 && (
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Any additional notes?
                  </h2>
                  <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-xl shadow-xl">
                    <div>
                      <Label htmlFor="notes" className="text-[#1a3a52]">Special Instructions (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Any specific requirements or instructions..."
                        className="mt-2"
                        rows={6}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="group text-white hover:text-white hover:bg-white/10"
                >
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  Back
                </Button>
                
                {step < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="group bg-gold hover:bg-gold/90 text-white shadow-lg"
                  >
                    Next
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="group bg-gold hover:bg-gold/90 text-white shadow-lg"
                  >
                    Submit Booking
                    <Check className="ml-2 h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;