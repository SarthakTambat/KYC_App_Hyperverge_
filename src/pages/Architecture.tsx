import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { 
  Shield, 
  ArrowLeft, 
  Cpu, 
  Cloud, 
  Smartphone, 
  Database, 
  Layers, 
  Zap,
  RefreshCw,
  HardDrive,
  Network,
  Lock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Server,
  Globe,
  FileText,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Architecture() {
  const sdkOptimizations = [
    {
      strategy: "Modular Design",
      description: "Core SDK with downloadable feature modules",
      impact: "60% size reduction",
      details: [
        "Base SDK: 2.5MB (core authentication, basic capture)",
        "Face module: 8MB (downloaded on-demand)",
        "DigiLocker module: 1.2MB (optional integration)",
        "Voice assistant: 4MB (language packs separate)"
      ]
    },
    {
      strategy: "Asset Optimization", 
      description: "Lazy loading and compression techniques",
      impact: "40% faster startup",
      details: [
        "WebP images with progressive loading",
        "Model compression using quantization", 
        "Code splitting by feature boundaries",
        "Tree shaking to remove unused code"
      ]
    },
    {
      strategy: "Native Integration",
      description: "Platform-specific optimizations",
      impact: "25% performance boost", 
      details: [
        "Android: Native camera2 API integration",
        "iOS: AVFoundation for optimal capture",
        "Hardware acceleration for face detection",
        "Background processing capabilities"
      ]
    }
  ];

  const processingTradeoffs = [
    {
      aspect: "Liveness Detection",
      onDevice: {
        pros: ["No network dependency", "Real-time feedback", "Privacy preserved"],
        cons: ["Limited accuracy on low-end devices", "Large model size"],
        recommendation: "Hybrid"
      },
      onServer: {
        pros: ["Higher accuracy", "Latest model updates", "Fraud pattern detection"],
        cons: ["Network required", "Latency issues", "Privacy concerns"],
        recommendation: "Primary"
      },
      hybrid: "Basic liveness on-device for immediate feedback, server verification for final decision"
    },
    {
      aspect: "Face Matching",
      onDevice: {
        pros: ["Instant results", "Works offline", "No data transmission"],
        cons: ["Limited template quality", "Storage overhead"],
        recommendation: "Secondary"
      },
      onServer: {
        pros: ["Advanced algorithms", "Cross-verification", "Centralized templates"],
        cons: ["Network dependency", "Upload time for images"],
        recommendation: "Primary" 
      },
      hybrid: "On-device quick match for UX, server match for compliance"
    },
    {
      aspect: "Document OCR",
      onDevice: {
        pros: ["Privacy protection", "Offline capability", "Fast text extraction"],
        cons: ["Accuracy varies by device", "Multiple language models"],
        recommendation: "Primary"
      },
      onServer: {
        pros: ["Superior accuracy", "Fraud detection", "Format validation"],
        cons: ["Network required", "Processing delays"],
        recommendation: "Validation"
      },
      hybrid: "On-device extraction, server validation and fraud check"
    }
  ];

  const retryMechanics = [
    {
      component: "Session State Management",
      description: "Persistent storage of user progress and data",
      technical: [
        "SQLite database with encrypted user session table",
        "JSON schema for step completion tracking", 
        "Automatic state restoration on app restart",
        "24-hour session timeout for security"
      ]
    },
    {
      component: "Image Storage Strategy",
      description: "Secure local storage with integrity checks",
      technical: [
        "AES-256 encrypted files in app sandbox",
        "SHA-256 checksums for integrity verification",
        "Automatic cleanup after successful upload",
        "Compression optimization for storage efficiency"
      ]
    },
    {
      component: "Network Retry Logic", 
      description: "Intelligent retry with exponential backoff",
      technical: [
        "Initial retry after 2 seconds, max 64 seconds",
        "Circuit breaker pattern for API endpoints",
        "Queue-based upload with priority ordering",
        "Notification system for sync completion"
      ]
    },
    {
      component: "Failure Recovery",
      description: "Graceful handling of crashes and interruptions", 
      technical: [
        "Crash detection and auto-recovery on restart",
        "Partial upload resume using HTTP range requests",
        "User notification of recovery options",
        "Data validation before resume operations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <Layers className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Technical Architecture</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="sdk-optimization" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sdk-optimization">SDK Optimization</TabsTrigger>
            <TabsTrigger value="processing-tradeoffs">Processing Trade-offs</TabsTrigger>
            <TabsTrigger value="retry-mechanics">Retry Mechanics</TabsTrigger>
            <TabsTrigger value="system-architecture">System Design</TabsTrigger>
          </TabsList>

          <TabsContent value="sdk-optimization" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="h-6 w-6 mr-2 text-green-600" />
                  SDK Size Minimization Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {sdkOptimizations.map((strategy, idx) => (
                    <div key={idx} className="border rounded-lg p-6 bg-white">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{strategy.strategy}</h4>
                        <Badge className="bg-green-100 text-green-800">
                          {strategy.impact}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{strategy.description}</p>
                      <ul className="space-y-2">
                        {strategy.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="text-sm text-gray-500 flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SDK Architecture Diagram */}
            <Card>
              <CardHeader>
                <CardTitle>Modular SDK Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="text-center mb-6">
                    <h4 className="font-semibold text-gray-900">BharatKYC SDK Structure</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* Core Module */}
                    <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
                      <Cpu className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-blue-900">Core Module</h5>
                      <p className="text-sm text-blue-700">2.5MB</p>
                      <ul className="text-xs text-blue-600 mt-2 space-y-1">
                        <li>• Basic capture</li>
                        <li>• Authentication</li>
                        <li>• State management</li>
                      </ul>
                    </div>

                    {/* Optional Modules */}
                    <div className="space-y-3">
                      <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-center">
                        <h6 className="font-medium text-green-900">Face Module</h6>
                        <p className="text-xs text-green-700">8MB (on-demand)</p>
                      </div>
                      <div className="bg-purple-100 border border-purple-300 rounded-lg p-3 text-center">
                        <h6 className="font-medium text-purple-900">DigiLocker</h6>
                        <p className="text-xs text-purple-700">1.2MB</p>
                      </div>
                      <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 text-center">
                        <h6 className="font-medium text-orange-900">Voice AI</h6>
                        <p className="text-xs text-orange-700">4MB + Lang Packs</p>
                      </div>
                    </div>

                    {/* Client Integration */}
                    <div className="bg-gray-200 border-2 border-gray-400 rounded-lg p-4 text-center">
                      <Database className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                      <h5 className="font-semibold text-gray-900">Client App</h5>
                      <p className="text-sm text-gray-700">SDK Integration</p>
                      <ul className="text-xs text-gray-600 mt-2 space-y-1">
                        <li>• Native embedding</li>
                        <li>• Web redirect</li>
                        <li>• Callback handling</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <span>Total Base Size: ~2.5MB</span>
                    <ArrowRight className="h-4 w-4" />
                    <span>Full Feature Set: ~15.7MB</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="processing-tradeoffs" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="h-6 w-6 mr-2 text-purple-600" />
                  On-Device vs Server Processing Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {processingTradeoffs.map((tradeoff, idx) => (
                    <div key={idx} className="border rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{tradeoff.aspect}</h4>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        {/* On-Device */}
                        <div className="space-y-3">
                          <h5 className="font-medium text-blue-900 flex items-center">
                            <Smartphone className="h-4 w-4 mr-2" />
                            On-Device Processing
                          </h5>
                          <div className="space-y-2">
                            <div>
                              <p className="text-sm font-medium text-green-700">Pros:</p>
                              <ul className="text-xs text-green-600 ml-4">
                                {tradeoff.onDevice.pros.map((pro, proIdx) => (
                                  <li key={proIdx}>• {pro}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-red-700">Cons:</p>
                              <ul className="text-xs text-red-600 ml-4">
                                {tradeoff.onDevice.cons.map((con, conIdx) => (
                                  <li key={conIdx}>• {con}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* On-Server */}
                        <div className="space-y-3">
                          <h5 className="font-medium text-purple-900 flex items-center">
                            <Server className="h-4 w-4 mr-2" />
                            Server Processing
                          </h5>
                          <div className="space-y-2">
                            <div>
                              <p className="text-sm font-medium text-green-700">Pros:</p>
                              <ul className="text-xs text-green-600 ml-4">
                                {tradeoff.onServer.pros.map((pro, proIdx) => (
                                  <li key={proIdx}>• {pro}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-red-700">Cons:</p>
                              <ul className="text-xs text-red-600 ml-4">
                                {tradeoff.onServer.cons.map((con, conIdx) => (
                                  <li key={conIdx}>• {con}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recommended Hybrid Approach */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h6 className="font-medium text-yellow-900 mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Recommended Hybrid Approach
                        </h6>
                        <p className="text-sm text-yellow-800">{tradeoff.hybrid}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Processing Flow Diagram */}
            <Card>
              <CardHeader>
                <CardTitle>Hybrid Processing Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                    <div className="text-center">
                      <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-2">
                        <Smartphone className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-blue-900">Device Processing</h4>
                      <p className="text-xs text-blue-700 mt-1">Real-time feedback<br />Basic validation</p>
                    </div>

                    <ArrowRight className="h-6 w-6 text-gray-400" />

                    <div className="text-center">
                      <div className="bg-purple-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-2">
                        <Cloud className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-purple-900">Server Validation</h4>
                      <p className="text-xs text-purple-700 mt-1">Advanced algorithms<br />Fraud detection</p>
                    </div>

                    <ArrowRight className="h-6 w-6 text-gray-400" />

                    <div className="text-center">
                      <div className="bg-green-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-green-900">Final Decision</h4>
                      <p className="text-xs text-green-700 mt-1">Compliance check<br />Result notification</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="retry-mechanics" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RefreshCw className="h-6 w-6 mr-2 text-orange-600" />
                  Retry & Resume Technical Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {retryMechanics.map((component, idx) => (
                    <div key={idx} className="border rounded-lg p-6 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{component.component}</h4>
                      <p className="text-gray-600 mb-4">{component.description}</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">Technical Implementation:</h5>
                        <ul className="space-y-2">
                          {component.technical.map((tech, techIdx) => (
                            <li key={techIdx} className="text-sm text-gray-700 flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* State Management Flow */}
            <Card>
              <CardHeader>
                <CardTitle>Session State & Recovery Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Flow Diagram */}
                  <div className="bg-gray-100 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="bg-blue-500 text-white rounded-lg p-4 mb-2">
                          <HardDrive className="h-6 w-6 mx-auto mb-1" />
                          <p className="text-sm font-medium">Save State</p>
                        </div>
                        <p className="text-xs text-gray-600">After each step completion</p>
                      </div>

                      <div className="text-center">
                        <div className="bg-red-500 text-white rounded-lg p-4 mb-2">
                          <AlertCircle className="h-6 w-6 mx-auto mb-1" />
                          <p className="text-sm font-medium">Interruption</p>
                        </div>
                        <p className="text-xs text-gray-600">App crash or network loss</p>
                      </div>

                      <div className="text-center">
                        <div className="bg-yellow-500 text-white rounded-lg p-4 mb-2">
                          <RefreshCw className="h-6 w-6 mx-auto mb-1" />
                          <p className="text-sm font-medium">Recovery</p>
                        </div>
                        <p className="text-xs text-gray-600">Auto-detect and restore</p>
                      </div>

                      <div className="text-center">
                        <div className="bg-green-500 text-white rounded-lg p-4 mb-2">
                          <CheckCircle className="h-6 w-6 mx-auto mb-1" />
                          <p className="text-sm font-medium">Resume</p>
                        </div>
                        <p className="text-xs text-gray-600">Continue from last step</p>
                      </div>
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <Database className="h-4 w-4 mr-2" />
                        Data Persistence Schema
                      </h4>
                      <div className="text-sm text-blue-800 font-mono bg-blue-100 p-3 rounded">
                        {`session {
  id: UUID
  user_id: string
  current_step: integer
  step_data: JSON
  images: encrypted_paths[]
  created_at: timestamp
  expires_at: timestamp
}`}
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                        <Network className="h-4 w-4 mr-2" />
                        Retry Strategy
                      </h4>
                      <ul className="text-sm text-green-800 space-y-2">
                        <li>• Initial delay: 2 seconds</li>
                        <li>• Max delay: 64 seconds</li>
                        <li>• Exponential backoff: 2^retry</li>
                        <li>• Max retries: 5 attempts</li>
                        <li>• Circuit breaker: 3 failures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system-architecture" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layers className="h-6 w-6 mr-2 text-indigo-600" />
                  Overall System Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8">
                  <div className="space-y-8">
                    {/* Client Layer */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-indigo-900 mb-4">Client Applications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm border">
                          <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <h4 className="font-medium">Mobile SDK</h4>
                          <p className="text-xs text-gray-600">Native integration</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm border">
                          <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <h4 className="font-medium">Web Redirect</h4>
                          <p className="text-xs text-gray-600">Browser-based flow</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm border">
                          <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                          <h4 className="font-medium">API Integration</h4>
                          <p className="text-xs text-gray-600">Direct API calls</p>
                        </div>
                      </div>
                    </div>

                    {/* API Gateway */}
                    <div className="flex justify-center">
                      <div className="bg-indigo-600 text-white rounded-lg px-6 py-3">
                        <Network className="h-6 w-6 mx-auto mb-1" />
                        <p className="text-sm font-medium">API Gateway</p>
                        <p className="text-xs opacity-80">Load balancer, Auth, Rate limiting</p>
                      </div>
                    </div>

                    {/* Microservices */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-indigo-900 mb-4">Core Services</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-blue-100 rounded-lg p-4">
                          <Shield className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">Auth Service</p>
                        </div>
                        <div className="bg-green-100 rounded-lg p-4">
                          <FileText className="h-6 w-6 text-green-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">Document Service</p>
                        </div>
                        <div className="bg-purple-100 rounded-lg p-4">
                          <Eye className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">Face Service</p>
                        </div>
                        <div className="bg-orange-100 rounded-lg p-4">
                          <Globe className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">DigiLocker Service</p>
                        </div>
                      </div>
                    </div>

                    {/* Data Layer */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-indigo-900 mb-4">Data & Storage</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-100 rounded-lg p-4">
                          <Database className="h-6 w-6 text-gray-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">PostgreSQL</p>
                          <p className="text-xs text-gray-600">User data, sessions</p>
                        </div>
                        <div className="bg-red-100 rounded-lg p-4">
                          <HardDrive className="h-6 w-6 text-red-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">Redis Cache</p>
                          <p className="text-xs text-gray-600">Session cache, rate limits</p>
                        </div>
                        <div className="bg-yellow-100 rounded-lg p-4">
                          <Cloud className="h-6 w-6 text-yellow-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">Object Storage</p>
                          <p className="text-xs text-gray-600">Document images, models</p>
                        </div>
                      </div>
                    </div>

                    {/* External Integrations */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-indigo-900 mb-4">External Integrations</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <Shield className="h-6 w-6 text-green-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">DigiLocker API</p>
                          <p className="text-xs text-gray-600">Government identity verification</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <Cpu className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                          <p className="text-sm font-medium">AI/ML Services</p>
                          <p className="text-xs text-gray-600">Face detection, OCR, NLP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Architecture */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-red-600" />
                  Security Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Data Protection</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        AES-256 encryption for data at rest
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        TLS 1.3 for data in transit
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Hardware security module (HSM) for key management
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Certificate pinning for API communication
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Access Control</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        OAuth 2.0 + JWT for authentication
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Role-based access control (RBAC)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        API rate limiting and throttling
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Multi-factor authentication for admin access
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}