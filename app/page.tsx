"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Trophy,
  Users,
  Target,
  Wallet,
  Activity,
  ExternalLink,
  Twitter,
  Github,
  Mail,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Gamepad2,
  Brain,
  ChevronRight,
  Star,
  Heart,
} from "lucide-react"

export default function AlphIQLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const features = [
    {
      icon: Activity,
      title: "Live Network Stats",
      description: "Real-time Alephium blockchain metrics with auto-refreshing data",
      color: "text-[#00E6B0]",
    },
    {
      icon: Wallet,
      title: "AI Wallet Profiler",
      description: "Connect and analyze wallets with AI-generated insights and risk assessment",
      color: "text-[#FF8A65]",
    },
    {
      icon: TrendingUp,
      title: "Token Flow Analyzer",
      description: "Visualize token transfers and trace large movements across the network",
      color: "text-[#A285FF]",
    },
    {
      icon: Shield,
      title: "Contract Decoder",
      description: "Decode Ralph smart contracts and make them human-readable",
      color: "text-[#00E6B0]",
    },
    {
      icon: Trophy,
      title: "Onchain Score & Leaderboards",
      description: "Earn XP for onchain activities and climb dynamic leaderboards",
      color: "text-[#FF8A65]",
    },
    {
      icon: Target,
      title: "Gamified Quests",
      description: "Complete onchain actions, unlock achievements, and boost ecosystem participation",
      color: "text-[#A285FF]",
    },
  ]

  const sections = [
    {
      icon: BarChart3,
      title: "Analytics",
      description:
        "Dive deep into Alephium with live network stats, wallet profiling, token flow insights, and a dynamic contract decoder.",
      gradient: "from-[#FF8A65] to-[#FF6B35]",
    },
    {
      icon: Gamepad2,
      title: "Quests",
      description:
        "Complete onchain actions, earn XP, and climb the leaderboard through our gamified quest system designed to boost ecosystem participation.",
      gradient: "from-[#00E6B0] to-[#00C896]",
    },
    {
      icon: Brain,
      title: "Learning",
      description:
        "Access simplified, real-time breakdowns of blockchain activity to educate users, builders, and analysts—turning every interaction into a learning opportunity.",
      gradient: "from-[#A285FF] to-[#8B5FE6]",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1B1B1F] text-[#E0E0E0] overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#FF8A65] to-[#00E6B0] rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 border-b border-[#7A7A7A]/20">
        <div className="flex items-center space-x-2">
          <img
            src="/images/alphiq-logo.png"
            alt="AlphIQ Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold">AlphIQ</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-[#E0E0E0] hover:text-[#FF8A65] hover:bg-[#FF8A65]/10"
            asChild
          >
            <a href="https://x.com/Alph_IQ" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-4 h-4 mr-2" />
              Follow Us
            </a>
          </Button>
          <Button className="bg-gradient-to-r from-[#FF8A65] to-[#00E6B0] text-[#1B1B1F] hover:opacity-90" asChild>
            <a href="https://app.alphiq.xyz/" target="_blank" rel="noopener noreferrer">
              Launch App
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="mb-6 bg-[#A285FF]/20 text-[#A285FF] border-[#A285FF]/30">
            <Sparkles className="w-3 h-3 mr-1" />
            All-in-One Alephium Analytics Platform
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF8A65] via-[#00E6B0] to-[#A285FF] bg-clip-text text-transparent">
            AlphIQ
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-[#7A7A7A] max-w-3xl mx-auto leading-relaxed">
            Unified platform for blockchain analytics, quests, and learning—empowering users to explore, engage, and
            educate through real-time insights and gamified onchain experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FF8A65] to-[#00E6B0] text-[#1B1B1F] hover:opacity-90 px-8 py-3 text-lg"
              asChild
            >
              <a href="https://app.alphiq.xyz/" target="_blank" rel="noopener noreferrer">
                Launch App
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#7A7A7A] text-[#E0E0E0] hover:bg-[#7A7A7A]/10 px-8 py-3 text-lg bg-transparent"
            >
              View Demo
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* App Screenshot */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A65] to-[#00E6B0] rounded-2xl blur-2xl opacity-20"></div>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src="/images/dashboard-analytics.png"
                alt="AlphIQ Analytics Dashboard"
                className="relative z-10 w-full rounded-xl border border-[#7A7A7A]/30 shadow-2xl"
              />
              <img
                src="/images/dashboard-gamification.png"
                alt="AlphIQ Gamification Dashboard"
                className="relative z-10 w-full rounded-xl border border-[#7A7A7A]/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALPH LAND Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#A285FF]/10 to-[#FF8A65]/10 rounded-3xl p-8 border border-[#A285FF]/30 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#A285FF]/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FF8A65]/20 to-transparent rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#FFD700] mr-2" />
                <span className="text-lg font-semibold text-[#E0E0E0]">We are LIVE on ALPH LAND!</span>
                <Star className="w-6 h-6 text-[#FFD700] ml-2" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#A285FF] to-[#FF8A65] bg-clip-text text-transparent">
                Show Your Love & Support
              </h2>
              
              <p className="text-[#7A7A7A] mb-6 max-w-2xl mx-auto leading-relaxed">
                AlphIQ is now featured on ALPH LAND - the premier directory for Alephium projects. 
                Your 5-star rating helps us grow and reach more users in the ecosystem!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#A285FF] to-[#8B5FE6] text-white hover:opacity-90 px-6 py-3"
                  asChild
                >
                  <a href="https://www.alph.land/alphiq" target="_blank" rel="noopener noreferrer">
                    <Heart className="w-5 h-5 mr-2" />
                    Rate 5 Stars
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#7A7A7A] text-[#E0E0E0] hover:bg-[#7A7A7A]/10 bg-transparent"
                  asChild
                >
                  <a href="https://www.alph.land/alphiq" target="_blank" rel="noopener noreferrer">
                    View on ALPH LAND
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              
              <div className="mt-6 flex justify-center items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                ))}
                <span className="ml-2 text-sm text-[#7A7A7A]">Your rating matters!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Main Sections */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Three Powerful Sections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="bg-[#1B1B1F]/80 border-[#7A7A7A]/30 hover:border-[#FF8A65]/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <section.icon className="w-8 h-8 text-[#1B1B1F]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#E0E0E0]">{section.title}</h3>
                  <p className="text-[#7A7A7A] leading-relaxed">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-20 bg-[#1B1B1F]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#1B1B1F]/80 border-[#7A7A7A]/30 hover:border-[#FF8A65]/50 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <feature.icon
                    className={`w-8 h-8 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="text-lg font-semibold mb-2 text-[#E0E0E0]">{feature.title}</h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#FF8A65]/10 to-[#00E6B0]/10 rounded-3xl p-12 border border-[#7A7A7A]/30">
            <Users className="w-16 h-16 text-[#FF8A65] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with AlphIQ</h2>
            <p className="text-xl text-[#7A7A7A] mb-8 leading-relaxed">
              List your quests on our platform! We've designed a tailored dashboard for partners to explore and manage
              their quest offerings, helping you engage with the Alephium community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF8A65] to-[#00E6B0] text-[#1B1B1F] hover:opacity-90"
                asChild
              >
                <a href="mailto:alphiqteam@gmail.com?subject=Partnership Inquiry - AlphIQ Quest Listing">
                  Become a Partner
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#7A7A7A] text-[#E0E0E0] hover:bg-[#7A7A7A]/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-20 bg-[#1B1B1F]/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00E6B0]">Real-time</div>
              <div className="text-[#7A7A7A]">Network Analytics</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#FF8A65]">AI-Powered</div>
              <div className="text-[#7A7A7A]">Wallet Insights</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#A285FF]">Gamified</div>
              <div className="text-[#7A7A7A]">Quest System</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-[#7A7A7A]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img
                src="/images/alphiq-logo.png"
                alt="AlphIQ Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">AlphIQ</span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://x.com/Alph_IQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7A7A7A] hover:text-[#FF8A65] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/pranshurastogi/AlphIQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7A7A7A] hover:text-[#00E6B0] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:alphiqteam@gmail.com" className="text-[#7A7A7A] hover:text-[#A285FF] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#7A7A7A]/20 text-center text-[#7A7A7A]">
            <p>&copy; 2025 AlphIQ. Empowering the Alephium ecosystem through analytics, quests, and learning.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
