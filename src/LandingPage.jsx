import { Menu, X, Leaf, Star } from "lucide-react";
import { useState } from "react";
export default function EducationLanding() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12 border-b lg:border-none">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">Educ</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-emerald-500 font-medium"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-emerald-500 font-medium"
          >
            About us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-emerald-500 font-medium"
          >
            Offers
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-emerald-500 font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Sign In Button (Desktop) */}
        <button className="hidden md:inline-block border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-200">
          Sign in
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-4 md:hidden z-50">
            <a href="#" className="text-gray-900 font-semibold">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-500">
              Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-500">
              About us
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-500">
              Offers
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-500">
              Contact
            </a>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-200">
              Sign in
            </button>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <main className="px-6 py-12 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Education is the best way to{" "}
                  <span className="text-emerald-500">
                    Grow Up Your Knowledge
                  </span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Our platform makes education flexible and convenient, so you
                  can achieve your goals wherever and whenever you choose.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center">
                  Enroll Now
                </button>
                {/* Learn More Button */}
                <button className="text-gray-700 px-8 py-4 font-semibold hover:text-emerald-500 transition-colors flex items-center justify-center group">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                  </div>
                  Learn More
                </button>
              </div>

              {/* Reviews Section */}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 pt-8">
                {/* Avatars */}
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=40&w=40",
                      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=40&w=40",
                      "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=40&w=40",
                      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=40&w=40",
                      "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=40&w=40",
                    ].map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt="Student"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}

                    <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">
                        +
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ratings */}
                <div className="flex items-center space-x-2 flex-wrap">
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current opacity-50" />
                  </div>
                  <span className="text-gray-700 font-medium">(4.5)</span>
                  <span className="text-gray-500 text-sm">
                    1000+ Reviews on our courses
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Image with Badges */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-3xl md:h-[36rem]">
                {/* Green Circular Background */}
                <div className="absolute inset-0 bg-emerald-500 rounded-full -m-4 opacity-90 z-0"></div>

                {/* Dashed Circular Border */}
                <div className="absolute inset-0 border-4 border-dashed border-emerald-500 rounded-full -m-8 opacity-30 z-0"></div>

                {/* Student Image */}
                <div className="relative md:-top-20 z-10">
                  <img
                    src="/stud.png"
                    alt="Happy student celebrating"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>

                {/* Top Right: Online Courses Badge */}
                <div className="absolute top-4 hidden sm:block right-4 bg-white rounded-xl px-2 py-1 sm:px-4 sm:py-3 shadow-lg z-20">
                  <div className="flex items-center sm:space-x-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-emerald-500 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        100+
                      </p>
                      <p className="text-xs text-gray-500">Online courses</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Left: UI Design Class Badge */}
                <div className="hidden lg:block absolute bottom-[13rem] left-[-12] bg-white rounded-xl p-3 shadow-lg max-w-xs z-20">
                  <div className="flex items-start space-x-3">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=40&w=40"
                      alt="UI Design Instructor"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        UI Design Class
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        Today at 12:00 PM
                      </p>
                      <button className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-md font-medium">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
