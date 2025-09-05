import { Button } from "@/components/ui/button.tsx";
import { Card } from "@/components/ui/card.tsx";
import { 
  Shield, 
  Smartphone, 
  Users, 
  Wifi, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">BharatKYC</h1>
            </div>
            <nav className="flex space-x-6">
              <Link to="/solution" className="text-gray-600 hover:text-blue-600">Solution</Link>
              <Link to="/architecture" className="text-gray-600 hover:text-blue-600">Architecture</Link>
              <Link to="/demo" className="text-gray-600 hover:text-blue-600">Demo</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
            Digital KYC for Bharat
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
            Comprehensive digital onboarding solution designed for rural and semi-urban India. 
            Supporting offline-first operations, multiple languages, and low-end devices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/solution">
                View Complete Solution <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/demo">
                Try Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Core Capabilities</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2">DigiLocker Integration</h4>
            <p className="text-sm text-gray-600">Seamless identity verification through government's DigiLocker platform</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2">Document KYC</h4>
            <p className="text-sm text-gray-600">Support for Aadhaar, PAN, Driver's License, and Voter ID verification</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2">Face Authentication</h4>
            <p className="text-sm text-gray-600">Liveness detection and face matching with document photos</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wifi className="h-6 w-6 text-orange-600" />
            </div>
            <h4 className="font-semibold mb-2">Offline-First</h4>
            <p className="text-sm text-gray-600">Works seamlessly with poor connectivity and syncs when online</p>
          </Card>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">AI-Powered Innovation</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="font-semibold">Voice Assistant</h4>
              </div>
              <p className="text-gray-600 mb-4">
                LLM-powered voice guidance in Hindi, English, and regional languages to help users navigate the KYC process.
              </p>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                High Impact, Medium Effort
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-purple-600 mr-2" />
                <h4 className="font-semibold">Smart Error Messages</h4>
              </div>
              <p className="text-gray-600 mb-4">
                AI translates technical errors into simple, actionable advice in the user's preferred language.
              </p>
              <div className="flex items-center text-sm text-blue-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                High Impact, Low Effort
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                <h4 className="font-semibold">Document Guidance</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Real-time AI coaching for document positioning, lighting, and image quality during capture.
              </p>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                Medium Impact, Medium Effort
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Digital Onboarding?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Explore our comprehensive solution designed specifically for India's diverse user base
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/solution">
                View Full Solution
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/architecture">
                Technical Details
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">BharatKYC</span>
              </div>
              <p className="text-sm">
                Enabling digital inclusion through accessible KYC solutions for rural and semi-urban India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Solution</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/solution" className="hover:text-white">Product Design</Link></li>
                <li><Link to="/architecture" className="hover:text-white">Architecture</Link></li>
                <li><Link to="/demo" className="hover:text-white">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="text-sm">
                Built for rural India<br />
                Designed for digital inclusion
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 BharatKYC. Empowering digital onboarding for all.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}