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
  Zap,
  Star,
  Play,
  Download,
  Eye,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                BharatKYC
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/solution" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Solution
              </Link>
              <Link to="/architecture" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Architecture
              </Link>
              <Link to="/demo" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Demo
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              #1 KYC Solution for Rural India
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
            Digital KYC for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Bharat
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
            India's first AI-powered KYC solution designed specifically for rural users. 
            Supporting offline-first operations, multiple languages, and low-end devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link to="/solution" className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Explore Solution
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/demo" className="flex items-center px-8 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300">
                <Play className="h-5 w-5 mr-2" />
                Live Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-green-500" />
              Government Approved
            </div>
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2 text-blue-500" />
              Bank-Grade Security  
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-indigo-500" />
              99.8% Success Rate
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile-First Design
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                Built for Every Indian
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From smartphones to feature phones, our solution works seamlessly across all devices. 
                Voice guidance in local languages makes KYC accessible to everyone.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">8+ Indian Languages</h4>
                  <p className="text-gray-600 text-sm">Hindi, English, Bengali, Tamil, Telugu, and more</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wifi className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Offline-First Architecture</h4>
                  <p className="text-gray-600 text-sm">Works even with poor or no internet connectivity</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI-Powered Assistance</h4>
                  <p className="text-gray-600 text-sm">Smart error handling and real-time guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-4 text-xs font-medium">
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs">100%</span>
                        <div className="w-6 h-3 border border-gray-900 rounded-sm">
                          <div className="w-full h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 py-4 border-b bg-white/50 backdrop-blur-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                          <Shield className="h-4 w-4 text-white" />
                        </div>
                        <h1 className="text-lg font-bold text-gray-900">BharatKYC</h1>
                      </div>
                    </div>

                    {/* Welcome Screen */}
                    <div className="px-6 py-8 text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">आपका स्वागत है</h2>
                        <h3 className="text-lg text-gray-700 mb-3">Welcome to BharatKYC</h3>
                        <p className="text-sm text-gray-600 px-2">
                          अपनी पहचान सत्यापित करने के लिए शुरू करें
                        </p>
                      </div>

                      <div className="space-y-4">
                        <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg">
                          शुरू करें / Start
                        </button>
                        
                        <button className="w-full border-2 border-gray-200 text-gray-700 font-medium py-3 px-6 rounded-2xl flex items-center justify-center">
                          <Globe className="h-4 w-4 mr-2" />
                          भाषा चुनें / Choose Language
                        </button>
                      </div>

                      {/* Progress Dots */}
                      <div className="flex justify-center space-x-2 pt-4">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Core Capabilities
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for KYC</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive identity verification with government integration and AI assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">DigiLocker Integration</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless identity verification through India's official DigiLocker platform with instant document access
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Document KYC</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced OCR for Aadhaar, PAN, Driver's License, and Voter ID with real-time validation
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Face Authentication</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced liveness detection and face matching with anti-spoofing technology
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Offline-First</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Works seamlessly with poor connectivity and syncs automatically when online
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Innovation
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Smart KYC Experience</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Breakthrough AI features that make identity verification accessible to everyone
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Voice Assistant</h4>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                LLM-powered conversational guidance in Hindi, English, and 6+ regional languages. 
                Helps users navigate each step with natural voice interactions.
              </p>
              <div className="flex items-center text-sm font-medium text-green-700 bg-green-50 px-3 py-2 rounded-full w-fit">
                <CheckCircle className="h-4 w-4 mr-2" />
                High Impact, Medium Effort
              </div>
            </Card>

            <Card className="p-8 border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Smart Error Messages</h4>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI converts technical errors into simple, actionable advice. 
                "Photo blurry" becomes "Move to brighter light and hold steady".
              </p>
              <div className="flex items-center text-sm font-medium text-blue-700 bg-blue-50 px-3 py-2 rounded-full w-fit">
                <CheckCircle className="h-4 w-4 mr-2" />
                High Impact, Low Effort
              </div>
            </Card>

            <Card className="p-8 border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Live Document Coach</h4>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Real-time AI coaching during capture with lighting analysis, 
                positioning guidance, and quality prediction before taking photos.
              </p>
              <div className="flex items-center text-sm font-medium text-yellow-700 bg-yellow-50 px-3 py-2 rounded-full w-fit">
                <CheckCircle className="h-4 w-4 mr-2" />
                Medium Impact, Medium Effort
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Digital Onboarding?</h3>
          <p className="text-xl mb-10 text-blue-100 leading-relaxed">
            Join thousands of organizations using BharatKYC to make identity verification 
            accessible to every Indian, everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl">
              <Link to="/solution" className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Get Started Free
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/architecture" className="flex items-center border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-6 text-lg font-semibold rounded-2xl">
                <Shield className="h-5 w-5 mr-2" />
                View Architecture
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BharatKYC</span>
              </div>
              <p className="text-sm leading-relaxed">
                India's most trusted KYC solution, enabling digital inclusion 
                for rural and semi-urban communities across the nation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/solution" className="hover:text-white transition-colors">Solution Overview</Link></li>
                <li><Link to="/architecture" className="hover:text-white transition-colors">Technical Specs</Link></li>
                <li><Link to="/demo" className="hover:text-white transition-colors">Live Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-3 text-sm">
                <li>DigiLocker Integration</li>
                <li>Multi-language Support</li>
                <li>Offline-first Design</li>
                <li>AI Voice Assistant</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>SDK Downloads</li>
                <li>Developer Portal</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">&copy; 2025 BharatKYC. Empowering digital inclusion for all Indians.</p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-sm">🇮🇳 Made in India</span>
                <span className="text-sm">🔒 Bank-grade Security</span>
                <span className="text-sm">✨ AI-powered</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}