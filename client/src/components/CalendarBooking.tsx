import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function CalendarBooking() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time");
      return;
    }
    console.log("Booking submitted:", { ...formData, date: selectedDate, time: selectedTime });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", businessName: "" });
      setSelectedDate("");
      setSelectedTime("");
    }, 5000);
  };

  // Generate available dates (next 30 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Exclude Sundays and Saturdays
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();
  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

  return (
    <section id="booking" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2c3e50] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
          Schedule Your Free Strategy Call
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose a time that works best for you. Our team will discuss your SEO and AI automation needs.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-medium">
              ✓ Thank you! Your strategy call has been scheduled. We'll send you a confirmation email shortly.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Your Information */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#2c3e50] mb-4">Your Information</h3>
            <div className="space-y-4">
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
              <Input
                placeholder="Business Name"
                name="businessName"
                value={formData.businessName}
                onChange={handleFormChange}
              />
            </div>
          </div>

          {/* Date Selection */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-[#2c3e50]" />
              <h3 className="font-bold text-[#2c3e50]">Select Date</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {availableDates.slice(0, 9).map((date) => {
                const dateObj = new Date(date);
                const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                const dayNum = dateObj.getDate();
                return (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg border-2 transition-all text-center ${
                      selectedDate === date
                        ? 'border-[#2c3e50] bg-[#2c3e50] text-white'
                        : 'border-gray-200 hover:border-[#2c3e50]'
                    }`}
                  >
                    <div className="text-xs font-medium">{dayName}</div>
                    <div className="text-lg font-bold">{dayNum}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Selection */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-[#2c3e50]" />
              <h3 className="font-bold text-[#2c3e50]">Select Time</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border-2 transition-all font-medium ${
                    selectedTime === time
                      ? 'border-[#2c3e50] bg-[#2c3e50] text-white'
                      : 'border-gray-200 hover:border-[#2c3e50]'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          {selectedDate && selectedTime && (
            <Card className="p-4 bg-blue-50 border-blue-200">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Scheduled for:</span> {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedTime}
              </p>
            </Card>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2"
          >
            Confirm Booking <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          We'll send you a confirmation email with meeting details and a calendar invite.
        </p>
      </div>
    </section>
  );
}
