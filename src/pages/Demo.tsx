import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Progress } from "@/components/ui/progress.tsx";
import { 
  Shield, 
  ArrowLeft, 
  Camera, 
  FileText, 
  Check, 
  ArrowRight,
  Volume2,
  Globe,
  Eye,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Smartphone,
  User,
  WifiOff,
  Upload
} from "lucide-react";
import { Link } from "react-router-dom";

type DemoStep = 
  | "welcome" 
  | "language" 
  | "document-type" 
  | "digilocker-consent" 
  | "document-capture" 
  | "face-capture" 
  | "processing" 
  | "success"
  | "error";

export default function Demo() {
  const [currentStep, setCurrentStep] = useState<DemoStep>("welcome");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("hindi");
  const [selectedDocument, setSelectedDocument] = useState<string>("");
  const [isOffline, setIsOffline] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [progress, setProgress] = useState(0);

  const stepMapping: Record<DemoStep, number> = {
    welcome: 0,
    language: 1, 
    "document-type": 2,
    "digilocker-consent": 3,
    "document-capture": 4,
    "face-capture": 5,
    processing: 6,
    success: 7,
    error: 6
  };

  const nextStep = () => {
    const steps: DemoStep[] = [
      "welcome", "language", "document-type", "digilocker-consent", 
      "document-capture", "face-capture", "processing", "success"
    ];
    
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      const next = steps[currentIndex + 1];
      setCurrentStep(next);
      setProgress(((currentIndex + 1) / (steps.length - 1)) * 100);
    }
  };

  const prevStep = () => {
    const steps: DemoStep[] = [
      "welcome", "language", "document-type", "digilocker-consent", 
      "document-capture", "face-capture", "processing", "success"
    ];
    
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      const prev = steps[currentIndex - 1];
      setCurrentStep(prev);
      setProgress(((currentIndex - 1) / (steps.length - 1)) * 100);
    }
  };

  const simulateError = () => {
    setCurrentStep("error");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "welcome":
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">BharatKYC में आपका स्वागत है</h2>
            <h3 className="text-lg text-gray-600">Welcome to BharatKYC</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              आपकी पहचान सत्यापित करने के लिए कृपया निर्देशों का पालन करें
            </p>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Please follow the instructions to verify your identity
            </p>
            
            <div className="flex items-center justify-center space-x-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-lg px-8"
                onClick={nextStep}
              >
                शुरू करें / Start
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setVoiceEnabled(!voiceEnabled)}
              >
                <Volume2 className={`h-4 w-4 mr-2 ${voiceEnabled ? 'text-blue-600' : 'text-gray-400'}`} />
                आवाज़ / Voice
              </Button>
            </div>

            {voiceEnabled && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-md mx-auto">
                <p className="text-sm text-blue-800">
                  🔊 "नमस्ते! मैं आपकी केवाईसी प्रक्रिया में मदद करूंगा। शुरू करने के लिए हरे बटन पर क्लिक करें।"
                </p>
              </div>
            )}
          </div>
        );

      case "language":
        return (
          <div className="space-y-6 py-8">
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">भाषा चुनें / Choose Language</h2>
              <p className="text-gray-600">अपनी पसंदीदा भाषा का चयन करें</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { code: "hindi", name: "हिंदी", flag: "🇮🇳" },
                { code: "english", name: "English", flag: "🇬🇧" },
                { code: "bengali", name: "বাংলা", flag: "🇮🇳" },
                { code: "tamil", name: "தமிழ்", flag: "🇮🇳" }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`p-4 border-2 rounded-lg text-center transition-all ${
                    selectedLanguage === lang.code 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{lang.flag}</div>
                  <div className="font-medium">{lang.name}</div>
                </button>
              ))}
            </div>

            {voiceEnabled && selectedLanguage && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  🔊 {selectedLanguage === "hindi" 
                    ? "अच्छा! अब आइए दस्तावेज़ का प्रकार चुनें।" 
                    : "Great! Now let's choose the document type."
                  }
                </p>
              </div>
            )}
          </div>
        );

      case "document-type":
        return (
          <div className="space-y-6 py-8">
            <div className="text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {selectedLanguage === "hindi" ? "दस्तावेज़ चुनें" : "Choose Document"}
              </h2>
              <p className="text-gray-600">
                {selectedLanguage === "hindi" 
                  ? "अपना पहचान दस्तावेज़ चुनें"
                  : "Select your identity document"
                }
              </p>
            </div>
            
            <div className="grid gap-4">
              {[
                { 
                  type: "aadhaar", 
                  name: selectedLanguage === "hindi" ? "आधार कार्ड" : "Aadhaar Card", 
                  icon: "🆔",
                  recommended: true
                },
                { 
                  type: "pan", 
                  name: selectedLanguage === "hindi" ? "पैन कार्ड" : "PAN Card", 
                  icon: "💳"
                },
                { 
                  type: "license", 
                  name: selectedLanguage === "hindi" ? "ड्राइविंग लाइसेंस" : "Driving License", 
                  icon: "🚗"
                },
                { 
                  type: "voter", 
                  name: selectedLanguage === "hindi" ? "वोटर आईडी" : "Voter ID", 
                  icon: "🗳️"
                }
              ].map((doc) => (
                <button
                  key={doc.type}
                  onClick={() => setSelectedDocument(doc.type)}
                  className={`p-4 border-2 rounded-lg text-left transition-all flex items-center justify-between ${
                    selectedDocument === doc.type 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{doc.icon}</div>
                    <div>
                      <div className="font-medium">{doc.name}</div>
                      {doc.recommended && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          {selectedLanguage === "hindi" ? "सुझाया गया" : "Recommended"}
                        </Badge>
                      )}
                    </div>
                  </div>
                  {selectedDocument === doc.type && <Check className="h-5 w-5 text-green-600" />}
                </button>
              ))}
            </div>

            {voiceEnabled && selectedDocument && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  🔊 {selectedLanguage === "hindi" 
                    ? "बढ़िया चुनाव! क्या आप DigiLocker का उपयोग करना चाहेंगे?" 
                    : "Great choice! Would you like to use DigiLocker?"
                  }
                </p>
              </div>
            )}
          </div>
        );

      case "digilocker-consent":
        return (
          <div className="space-y-6 py-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <img src="/api/placeholder/200/60" alt="Government of India" className="mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">DigiLocker</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                {selectedLanguage === "hindi" 
                  ? "सरकारी DigiLocker से अपने दस्तावेज़ सुरक्षित रूप से प्राप्त करें"
                  : "Securely fetch your documents from government DigiLocker"
                }
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-900 mb-2">
                {selectedLanguage === "hindi" ? "लाभ:" : "Benefits:"}
              </h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {selectedLanguage === "hindi" ? "तत्काल सत्यापन" : "Instant verification"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {selectedLanguage === "hindi" ? "कोई फोटो खींचने की जरूरत नहीं" : "No need to take photos"}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {selectedLanguage === "hindi" ? "100% सुरक्षित और प्रामाणिक" : "100% secure and authentic"}
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <Button 
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={() => {
                  // Skip document capture for DigiLocker flow
                  setCurrentStep("face-capture");
                  setProgress(70);
                }}
              >
                <Shield className="h-4 w-4 mr-2" />
                {selectedLanguage === "hindi" ? "DigiLocker का उपयोग करें" : "Use DigiLocker"}
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={nextStep}
              >
                {selectedLanguage === "hindi" ? "दस्तावेज़ की फोटो लें" : "Take Document Photo"}
              </Button>
            </div>

            {voiceEnabled && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  🔊 {selectedLanguage === "hindi" 
                    ? "DigiLocker सबसे तेज़ और सुरक्षित तरीका है। मैं इसकी सिफारिश करता हूं।" 
                    : "DigiLocker is the fastest and most secure way. I recommend using it."
                  }
                </p>
              </div>
            )}
          </div>
        );

      case "document-capture":
        return (
          <div className="space-y-6 py-8">
            <div className="text-center">
              <Camera className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {selectedLanguage === "hindi" ? "दस्तावेज़ की फोटो लें" : "Capture Document"}
              </h2>
              <p className="text-gray-600">
                {selectedLanguage === "hindi" 
                  ? "अपने दस्तावेज़ को फ्रेम के अंदर रखें"
                  : "Position your document inside the frame"
                }
              </p>
            </div>

            {/* Simulated Camera View */}
            <div className="relative bg-gray-900 rounded-lg aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-4 border-2 border-dashed border-white/50 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <FileText className="h-16 w-16 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">
                    {selectedLanguage === "hindi" 
                      ? "दस्तावेज़ यहाँ रखें" 
                      : "Place document here"
                    }
                  </p>
                </div>
              </div>
              
              {/* Live Feedback */}
              <div className="absolute top-4 left-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-center">
                <p className="text-sm">
                  {selectedLanguage === "hindi" 
                    ? "📍 दस्तावेज़ को और पास लाएं" 
                    : "📍 Move document closer"
                  }
                </p>
              </div>
              
              {/* Capture Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Button 
                  size="lg" 
                  className="rounded-full w-16 h-16 bg-white hover:bg-gray-100 text-gray-900"
                  onClick={nextStep}
                >
                  <Camera className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900 mb-2 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                {selectedLanguage === "hindi" ? "सुझाव:" : "Tips:"}
              </h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• {selectedLanguage === "hindi" ? "अच्छी रोशनी में फोटो लें" : "Take photo in good lighting"}</li>
                <li>• {selectedLanguage === "hindi" ? "फोन को स्थिर रखें" : "Keep phone steady"}</li>
                <li>• {selectedLanguage === "hindi" ? "दस्तावेज़ को सीधा रखें" : "Keep document straight"}</li>
              </ul>
            </div>

            {voiceEnabled && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  🔊 {selectedLanguage === "hindi" 
                    ? "दस्तावेज़ को फ्रेम के अंदर रखें और स्पष्ट फोटो के लिए स्थिर रहें।" 
                    : "Position the document inside the frame and stay steady for a clear photo."
                  }
                </p>
              </div>
            )}
          </div>
        );

      case "face-capture":
        return (
          <div className="space-y-6 py-8">
            <div className="text-center">
              <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {selectedLanguage === "hindi" ? "चेहरे की पहचान" : "Face Verification"}
              </h2>
              <p className="text-gray-600">
                {selectedLanguage === "hindi" 
                  ? "कैमरे की तरफ देखें और निर्देशों का पालन करें"
                  : "Look at the camera and follow the instructions"
                }
              </p>
            </div>

            {/* Simulated Face Capture */}
            <div className="relative bg-gray-900 rounded-lg aspect-[3/4] flex items-center justify-center">
              <div className="w-48 h-48 border-4 border-dashed border-white/50 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Eye className="h-16 w-16 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">
                    {selectedLanguage === "hindi" 
                      ? "यहाँ देखें" 
                      : "Look here"
                    }
                  </p>
                </div>
              </div>
              
              {/* Liveness Instructions */}
              <div className="absolute top-4 left-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-center">
                <p className="text-sm">
                  {selectedLanguage === "hindi" 
                    ? "👁️ अब पलक झपकाएं" 
                    : "👁️ Please blink now"
                  }
                </p>
              </div>
              
              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 rounded-lg px-4 py-2">
                  <Progress value={75} className="w-full mb-2" />
                  <p className="text-white text-xs text-center">
                    {selectedLanguage === "hindi" ? "लगभग तैयार..." : "Almost ready..."}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                {selectedLanguage === "hindi" ? "चेहरा पहचाना गया" : "Face detected"}
              </div>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                {selectedLanguage === "hindi" ? "स्पष्टता अच्छी है" : "Good clarity"}
              </div>
              <div className="flex items-center text-yellow-600">
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                {selectedLanguage === "hindi" ? "जीवंतता जांच..." : "Liveness check..."}
              </div>
              <div className="flex items-center text-gray-400">
                <AlertCircle className="h-4 w-4 mr-2" />
                {selectedLanguage === "hindi" ? "मिलान प्रतीक्षित" : "Match pending"}
              </div>
            </div>

            <Button 
              className="w-full" 
              onClick={nextStep}
            >
              {selectedLanguage === "hindi" ? "जारी रखें" : "Continue"}
            </Button>

            {voiceEnabled && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  🔊 {selectedLanguage === "hindi" 
                    ? "बहुत बढ़िया! अब कृपया मुस्कुराएं।" 
                    : "Excellent! Now please smile."
                  }
                </p>
              </div>
            )}
          </div>
        );

      case "processing":
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <RefreshCw className="h-12 w-12 text-blue-600 animate-spin" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {selectedLanguage === "hindi" ? "प्रसंस्करण हो रहा है..." : "Processing..."}
            </h2>
            <p className="text-gray-600">
              {selectedLanguage === "hindi" 
                ? "आपके दस्तावेज़ों का सत्यापन हो रहा है"
                : "Verifying your documents"
              }
            </p>

            <Progress value={progress} className="w-full max-w-md mx-auto" />

            {isOffline && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center text-orange-800">
                  <WifiOff className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    {selectedLanguage === "hindi" 
                      ? "ऑफ़लाइन मोड - कनेक्शन मिलने पर अपलोड होगा"
                      : "Offline mode - Will upload when connected"
                    }
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-2 text-sm text-gray-600 max-w-md mx-auto">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                {selectedLanguage === "hindi" ? "दस्तावेज़ स्कैन पूरा" : "Document scan complete"}
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                {selectedLanguage === "hindi" ? "चेहरा मिलान पूरा" : "Face match complete"}
              </div>
              <div className="flex items-center">
                <RefreshCw className="h-4 w-4 mr-2 animate-spin text-blue-500" />
                {selectedLanguage === "hindi" ? "सत्यापन चल रहा है..." : "Verification in progress..."}
              </div>
            </div>

            <div className="flex space-x-4 justify-center">
              <Button variant="outline" onClick={() => setIsOffline(!isOffline)}>
                <WifiOff className="h-4 w-4 mr-2" />
                {isOffline ? "Go Online" : "Simulate Offline"}
              </Button>
              <Button variant="outline" onClick={simulateError}>
                Simulate Error
              </Button>
              <Button onClick={nextStep}>
                Complete Process
              </Button>
            </div>
          </div>
        );

      case "success":
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedLanguage === "hindi" ? "केवाईसी सफल!" : "KYC Successful!"}
            </h2>
            <p className="text-gray-600">
              {selectedLanguage === "hindi" 
                ? "आपकी पहचान सफलतापूर्वक सत्यापित हो गई है"
                : "Your identity has been successfully verified"
              }
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
              <h3 className="font-medium text-green-900 mb-2">
                {selectedLanguage === "hindi" ? "संदर्भ संख्या:" : "Reference Number:"}
              </h3>
              <p className="text-lg font-mono text-green-800">KYC-2025-001234</p>
            </div>

            <div className="flex space-x-4 justify-center">
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                {selectedLanguage === "hindi" ? "डाउनलोड करें" : "Download"}
              </Button>
              <Button variant="outline" onClick={() => {
                setCurrentStep("welcome");
                setProgress(0);
                setSelectedDocument("");
                setSelectedLanguage("hindi");
              }}>
                {selectedLanguage === "hindi" ? "फिर से शुरू करें" : "Start Over"}
              </Button>
            </div>

            {voiceEnabled && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-md mx-auto">
                <p className="text-sm text-blue-800">
                  🔊 {selectedLanguage === "hindi" 
                    ? "बधाई हो! आपकी केवाईसी प्रक्रिया सफलतापूर्वक पूर्ण हुई।" 
                    : "Congratulations! Your KYC process has been completed successfully."
                  }
                </p>
              </div>
            )}
          </div>
        );

      case "error":
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="h-12 w-12 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {selectedLanguage === "hindi" ? "फोटो स्पष्ट नहीं है" : "Photo Not Clear"}
            </h2>
            <p className="text-gray-600">
              {selectedLanguage === "hindi" 
                ? "कृपया बेहतर रोशनी में जाकर दोबारा कोशिश करें"
                : "Please move to better lighting and try again"
              }
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
              <h4 className="font-medium text-blue-900 mb-2">
                {selectedLanguage === "hindi" ? "AI सुझाव:" : "AI Suggestion:"}
              </h4>
              <p className="text-sm text-blue-800">
                {selectedLanguage === "hindi" 
                  ? "खिड़की के पास जाएं या लाइट चालू करें। फोन को स्थिर रखें और दोबारा फोटो लें।"
                  : "Move near a window or turn on lights. Hold phone steady and take photo again."
                }
              </p>
            </div>

            <div className="flex space-x-4 justify-center">
              <Button onClick={() => setCurrentStep("document-capture")}>
                <Camera className="h-4 w-4 mr-2" />
                {selectedLanguage === "hindi" ? "दोबारा कोशिश करें" : "Try Again"}
              </Button>
              <Button variant="outline">
                {selectedLanguage === "hindi" ? "सहायता चाहिए" : "Get Help"}
              </Button>
            </div>

            {voiceEnabled && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-md mx-auto">
                <p className="text-sm text-blue-800">
                  🔊 {selectedLanguage === "hindi" 
                    ? "कोई बात नहीं! बेहतर रोशनी में जाकर दोबारा कोशिश करें।" 
                    : "No worries! Move to better lighting and try again."
                  }
                </p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">BharatKYC Demo</h1>
              </div>
            </div>
            <Badge variant="outline">Interactive Demo</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-500">
              Step {stepMapping[currentStep] + 1} of 8
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        {/* Mobile Phone Mockup */}
        <Card className="mx-auto max-w-md bg-gray-900 p-2 rounded-2xl shadow-2xl">
          <div className="bg-white rounded-xl overflow-hidden">
            {/* Phone Header */}
            <div className="bg-gray-100 px-4 py-2 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <span className="font-medium">BharatKYC</span>
              <div className="flex items-center space-x-1">
                <div className="text-gray-600">100%</div>
                <div className="w-6 h-3 border border-gray-400 rounded-sm">
                  <div className="w-full h-full bg-green-500 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* App Content */}
            <div className="min-h-[600px] bg-white">
              {renderCurrentStep()}
            </div>

            {/* Navigation */}
            {currentStep !== "welcome" && currentStep !== "success" && currentStep !== "processing" && currentStep !== "error" && (
              <div className="bg-gray-50 px-4 py-3 flex justify-between border-t">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={prevStep}
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  {selectedLanguage === "hindi" ? "पीछे" : "Back"}
                </Button>
                <Button 
                  size="sm" 
                  onClick={nextStep}
                  disabled={
                    (currentStep === "document-type" && !selectedDocument) ||
                    (currentStep === "language" && !selectedLanguage)
                  }
                >
                  {selectedLanguage === "hindi" ? "आगे" : "Next"}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Demo Controls */}
        <Card className="mt-8 p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-lg">Demo Controls</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className={voiceEnabled ? "bg-blue-50 border-blue-200" : ""}
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Voice: {voiceEnabled ? "On" : "Off"}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsOffline(!isOffline)}
                className={isOffline ? "bg-orange-50 border-orange-200" : ""}
              >
                <WifiOff className="h-4 w-4 mr-2" />
                {isOffline ? "Offline" : "Online"}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setCurrentStep("error")}
              >
                <AlertCircle className="h-4 w-4 mr-2" />
                Test Error
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setCurrentStep("welcome");
                  setProgress(0);
                  setSelectedDocument("");
                  setSelectedLanguage("hindi");
                }}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}