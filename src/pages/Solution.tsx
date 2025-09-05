import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { 
  Shield, 
  ArrowLeft, 
  Users, 
  Camera, 
  FileText, 
  Smartphone, 
  Wifi, 
  CheckCircle,
  AlertTriangle,
  Target,
  TrendingUp,
  Globe,
  Zap,
  Bot,
  Volume2,
  Eye,
  WifiOff
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Solution() {
  const userFlowSteps = [
    {
      step: 1,
      title: "Welcome & Language Selection",
      description: "Large, colorful welcome screen with voice prompts",
      details: [
        "Big 'शुरू करें' (Start) button in center",
        "Language selector with flag icons",
        "Voice greeting in selected language",
        "Simple progress indicator (1/6)"
      ]
    },
    {
      step: 2,
      title: "Document Type Selection", 
      description: "Visual document picker with familiar icons",
      details: [
        "Large cards showing Aadhaar, PAN, License icons",
        "Hindi/English labels below each option", 
        "Voice explanation of each document type",
        "Back button clearly visible"
      ]
    },
    {
      step: 3,
      title: "DigiLocker Consent",
      description: "Simple consent screen with government branding",
      details: [
        "Government of India logo for trust",
        "Simple explanation in local language",
        "Large 'Allow' and 'Skip' buttons",
        "Voice explanation of benefits"
      ]
    },
    {
      step: 4,
      title: "Document Capture",
      description: "Camera view with real-time guidance",
      details: [
        "Document outline overlay on camera",
        "Live feedback: 'Move closer', 'Hold steady'",
        "Voice instructions in chosen language",
        "Auto-capture when document is properly positioned"
      ]
    },
    {
      step: 5,
      title: "Face Capture",
      description: "Selfie screen with liveness detection",
      details: [
        "Face outline circle on screen",
        "Blink/smile prompts with animations",
        "Voice instructions: 'Look at camera'", 
        "Retry option if detection fails"
      ]
    },
    {
      step: 6,
      title: "Review & Submit",
      description: "Confirmation screen showing captured data",
      details: [
        "Thumbnail of captured documents",
        "Edit options clearly marked",
        "Large 'Submit' button",
        "Offline indicator if no connectivity"
      ]
    }
  ];

  const wireframes = [
    {
      screen: "Welcome Screen",
      elements: [
        "App logo and 'BharatKYC' name at top",
        "Welcome message in Hindi/English", 
        "Large circular 'शुरू करें' button (bright green)",
        "Language selector dropdown",
        "Voice icon with 'Tap to hear' text",
        "Progress dots: ●○○○○○"
      ]
    },
    {
      screen: "Document Selection",
      elements: [
        "Header: 'Choose your document'",
        "3 large cards in grid layout",
        "Aadhaar card icon + 'आधार कार्ड'",
        "PAN card icon + 'पैन कार्ड'", 
        "License icon + 'लाइसेंस'",
        "Back arrow (top-left), Next disabled until selection"
      ]
    },
    {
      screen: "Camera Capture", 
      elements: [
        "Full-screen camera view",
        "Document outline overlay (dotted rectangle)",
        "Top banner: 'Position document inside frame'",
        "Bottom feedback: 'Move closer' or 'Perfect!'",
        "Capture button (auto-activates when ready)",
        "Cancel/back option in top-left"
      ]
    },
    {
      screen: "Face Capture",
      elements: [
        "Camera view with face outline circle",
        "Instruction text: 'Look directly at camera'",
        "Liveness prompts: 'Blink now' with animation",
        "Green checkmark when face detected properly",
        "Retake button if needed",
        "Voice guidance playing indicator"
      ]
    },
    {
      screen: "Processing/Offline",
      elements: [
        "Large spinner animation",
        "Status text: 'Processing your documents...'",
        "If offline: 'Will sync when connected'",
        "Progress percentage if available",
        "Cancel option (saves progress)",
        "Estimated time remaining"
      ]
    },
    {
      screen: "Success State",
      elements: [
        "Large green checkmark icon",
        "Success message: 'KYC Complete!'", 
        "Reference number display",
        "Share/download options",
        "'Done' button to exit",
        "Feedback option: 'Rate your experience'"
      ]
    },
    {
      screen: "Error State",
      elements: [
        "Warning icon (not scary red)",
        "Simple error message",
        "Suggested action in plain language",
        "Voice explanation button",
        "'Try Again' and 'Get Help' options", 
        "Progress preserved indicator"
      ]
    }
  ];

  const llmFeatures = [
    {
      title: "Voice Assistant (VoiceGuide AI)",
      description: "LLM-powered conversational assistant in 8+ Indian languages",
      details: [
        "Real-time voice guidance through each step",
        "Contextual help based on user's current action",
        "Natural language processing for user questions",
        "Fallback to simpler language if user seems confused"
      ],
      priority: "High Impact, Medium Effort",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "Smart Error Translation (ErrorSimplify AI)", 
      description: "Converts technical errors into actionable, simple instructions",
      details: [
        "'Image too dark' → 'Move to brighter light and try again'",
        "'Face not detected' → 'Look directly at camera, remove glasses'", 
        "'Document blur' → 'Hold phone steady, tap to focus'",
        "Learns from user behavior to improve suggestions"
      ],
      priority: "High Impact, Low Effort", 
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Live Document Coach (CaptureAI)",
      description: "Real-time AI coaching during document and face capture", 
      details: [
        "Detects document orientation and guides positioning",
        "Lighting analysis with improvement suggestions", 
        "Quality prediction before capture",
        "Accessibility features for users with disabilities"
      ],
      priority: "Medium Impact, Medium Effort",
      badgeColor: "bg-yellow-100 text-yellow-800"
    }
  ];

  const kpis = [
    {
      category: "Engagement",
      metrics: [
        "KYC Completion Rate (Target: >85%)",
        "Time to Complete (Target: <8 minutes)", 
        "First-Attempt Success Rate (Target: >70%)"
      ]
    },
    {
      category: "Conversion", 
      metrics: [
        "Drop-off Rate by Step (Monitor each step)",
        "Retry Rate (Target: <20%)",
        "DigiLocker Adoption Rate (Target: >60%)"
      ]
    },
    {
      category: "Performance",
      metrics: [
        "Offline Success Rate (Target: >95%)",
        "Average Sync Time (Target: <30 seconds)",
        "App Crash Rate (Target: <0.1%)",
        "Document Verification Accuracy (Target: >98%)"
      ]
    }
  ];

  const securityConcerns = [
    {
      concern: "Data Privacy at Rest", 
      mitigation: "All PII encrypted on device using AES-256 with hardware-backed key storage."
    },
    {
      concern: "Secure Data Transmission",
      mitigation: "End-to-end encryption with certificate pinning and token-based authentication."
    },
    {
      concern: "Liveness Spoofing Attacks", 
      mitigation: "Multi-modal liveness detection combining face movement, texture analysis, and depth sensing."
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
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">BharatKYC Solution</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="product-design" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="product-design">Product Design</TabsTrigger>
            <TabsTrigger value="llm-features">AI Innovation</TabsTrigger> 
            <TabsTrigger value="offline-strategy">Offline Strategy</TabsTrigger>
            <TabsTrigger value="metrics">Success Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="product-design" className="space-y-8">
            {/* User Flow Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-600" />
                  User-Centric Flow for First-Time Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {userFlowSteps.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        <ul className="space-y-1">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-gray-500 flex items-center">
                              <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wireframes Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="h-6 w-6 mr-2 text-green-600" />
                  Detailed Wireframes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {wireframes.map((wireframe) => (
                    <div key={wireframe.screen} className="border rounded-lg p-4 bg-gray-50">
                      <h4 className="font-semibold mb-3 text-center">{wireframe.screen}</h4>
                      <div className="space-y-2">
                        {wireframe.elements.map((element, idx) => (
                          <div key={idx} className="text-sm text-gray-600 bg-white p-2 rounded border-l-4 border-blue-200">
                            {element}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="llm-features" className="space-y-8">
            {/* LLM Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="h-6 w-6 mr-2 text-purple-600" />
                  LLM-Powered Innovations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {llmFeatures.map((feature, idx) => (
                    <div key={idx} className="border rounded-lg p-6 bg-white">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                        <Badge className={feature.badgeColor}>
                          {feature.priority}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIdx) => (
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

            {/* Prioritization Matrix */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 mr-2 text-orange-600" />
                  Feature Prioritization Matrix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 h-96">
                  {/* High Impact, Low Effort */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">High Impact, Low Effort</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border border-green-200 text-sm">
                        ✅ Smart Error Translation
                      </div>
                      <div className="bg-white p-2 rounded border border-green-200 text-sm">
                        ✅ Basic Document KYC
                      </div>
                    </div>
                  </div>

                  {/* High Impact, High Effort */}
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">High Impact, High Effort</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border border-yellow-200 text-sm">
                        🎯 Voice Assistant
                      </div>
                      <div className="bg-white p-2 rounded border border-yellow-200 text-sm">
                        🎯 Face Authentication
                      </div>
                      <div className="bg-white p-2 rounded border border-yellow-200 text-sm">
                        🎯 DigiLocker Integration
                      </div>
                    </div>
                  </div>

                  {/* Low Impact, Low Effort */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Low Impact, Low Effort</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border border-blue-200 text-sm">
                        📋 Analytics Dashboard
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-200 text-sm">
                        📋 Additional Languages
                      </div>
                    </div>
                  </div>

                  {/* Low Impact, High Effort */}
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Low Impact, High Effort</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border border-red-200 text-sm">
                        ❌ Custom UI Framework
                      </div>
                      <div className="bg-white p-2 rounded border border-red-200 text-sm">
                        ❌ Blockchain Integration
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="offline-strategy" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <WifiOff className="h-6 w-6 mr-2 text-orange-600" />
                  Offline-First Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Local Storage Strategy</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        SQLite database for form data and session state
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Encrypted image storage in app's private directory
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Progress markers for each completed step
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Automatic cleanup after successful sync
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Sync Mechanism</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Background sync when connectivity restored
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Exponential backoff retry strategy
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        Chunked upload for large image files
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        User notification when sync completes
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Wifi className="h-4 w-4 mr-2" />
                    Interruption Handling
                  </h4>
                  <p className="text-blue-800 text-sm">
                    The app saves progress after each step completion. If interrupted during image capture, 
                    users can resume from the last successful step. Session data expires after 24 hours 
                    for security, requiring restart for abandoned sessions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-8">
            {/* Success Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
                  Key Performance Indicators (KPIs)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {kpis.map((category) => (
                    <div key={category.category} className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-center border-b pb-2">
                        {category.category}
                      </h4>
                      <ul className="space-y-3">
                        {category.metrics.map((metric, idx) => (
                          <li key={idx} className="text-sm bg-gray-50 p-3 rounded border-l-4 border-blue-200">
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Security Concerns */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-red-600" />
                  Security Concerns & Mitigations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityConcerns.map((item, idx) => (
                    <div key={idx} className="border rounded-lg p-4 bg-red-50 border-red-200">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div className="flex-grow">
                          <h4 className="font-semibold text-red-900 mb-2">{item.concern}</h4>
                          <p className="text-red-800 text-sm">{item.mitigation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}