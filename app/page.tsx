"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  PhoneCall,
  MessageSquare,
  Calendar,
  TrendingUp,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Heart,
  Home,
  HardHat,
} from "lucide-react"

export default function HomePage() {
  const handleBookDemo = (industry?: string) => {
    const industryText = industry ? ` - ${industry}` : ""
    const subject = encodeURIComponent(`Free Demo Request - Task4Leads${industryText}`)
    const body = encodeURIComponent(`Hello Task4Leads Team,

I'm interested in learning more about your lead conversion services${industry ? ` for ${industry}` : ""}.

Please contact me to schedule a free demo.

My Information:
- Industry: ${industry || ""}
- Company Name: 
- Phone Number: 
- Best Time to Call: 
- Current Lead Volume: 

Thank you!`)

    const mailtoLink = `mailto:info@task4leads.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink

    setTimeout(() => {
      alert(
        "If your email client didn't open, please email us directly at info@task4leads.com with your contact information and we'll get back to you within 24 hours!",
      )
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">T4L</span>
            </div>
            <a
              href="https://task4leads.com/"
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Task4Leads
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#medicare" className="text-muted-foreground hover:text-foreground transition-colors">
              Medicare
            </a>
            <a href="#real-estate" className="text-muted-foreground hover:text-foreground transition-colors">
              Real Estate
            </a>
            <a href="#construction" className="text-muted-foreground hover:text-foreground transition-colors">
              Construction
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="tel:+19362339064"
              className="hidden lg:flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              <span className="font-semibold">(936) 233-9064</span>
            </a>
            <Button onClick={() => handleBookDemo()} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book a Free Demo
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Turn Inquiries Into Booked Appointments
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
              Professional lead conversion services for Medicare, Real Estate, and Construction industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => handleBookDemo()}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/30 text-lg px-8 py-4"
              >
                <a href="tel:+19362339064">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call (936) 233-9064
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="medicare" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ FEATURED SERVICE - ACTIVE CLIENTS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Medicare Leads by Task4Leads</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Convert Medicare inquiries into enrolled clients with our specialized follow-up system designed for
                insurance agents and Medicare advisors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white border-2 border-primary/20">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Why Medicare Leads Are Different</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Time-sensitive enrollment periods require immediate response</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Seniors need patient, knowledgeable guidance through complex options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Multiple touchpoints needed to build trust and answer questions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Compliance-focused communication that meets CMS guidelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-accent/20">
                <CardContent className="p-8">
                  <TrendingUp className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Medicare Lead Process</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Instant response to Medicare inquiries (calls, forms, chats)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Trained specialists who understand Medicare Advantage, Supplement, Part D</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Multi-channel follow-up via phone, email, and SMS</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span>Appointment scheduling directly into your calendar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => handleBookDemo("Medicare")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
              >
                Get Medicare Leads Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="real-estate" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Home className="h-16 w-16 text-emerald-600 mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Real Estate Leads</h2>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Convert property inquiries into showings and closings. We handle buyer and seller leads so you can
                  focus on closing deals.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Instant Response to Property Inquiries</h4>
                      <p className="text-muted-foreground">
                        Buyers and sellers expect immediate answers. We respond within minutes to every lead.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Showing Coordination</h4>
                      <p className="text-muted-foreground">
                        We schedule property showings and open house appointments directly into your calendar.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Lead Qualification</h4>
                      <p className="text-muted-foreground">
                        We pre-qualify buyers and sellers so you only meet with serious, ready-to-move clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Multi-Channel Follow-Up</h4>
                      <p className="text-muted-foreground">
                        Persistent follow-up via phone, email, and SMS until the appointment is booked.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => handleBookDemo("Real Estate")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Get Real Estate Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="relative">
                <img
                  src="/real-estate-agent-showing-modern-home-to-clients.jpg"
                  alt="Real estate agent with clients"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-emerald-200">
              <h3 className="text-3xl font-bold mb-8 text-center text-balance">Hear Our Real Estate Lead Generation in Action</h3>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-center text-muted-foreground mb-6">
                  Listen to how our team handles real estate leads with professionalism and efficiency:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-emerald-900">Sample Call 1: Buyer Inquiry</h4>
                    <audio controls className="w-full">
                      <source src="/audio-placeholder-buyer.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <p className="text-sm text-muted-foreground mt-2">Professional response to buyer inquiry and scheduling</p>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-emerald-900">Sample Call 2: Seller Inquiry</h4>
                    <audio controls className="w-full">
                      <source src="/audio-placeholder-seller.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <p className="text-sm text-muted-foreground mt-2">Expert handling of seller inquiry and follow-up coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="construction" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="/contractor-working.jpg"
                  alt="Professional contractor working on project"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>

              <div className="order-1 lg:order-2">
                <HardHat className="h-16 w-16 text-primary mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Construction Leads</h2>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Turn homeowner inquiries into booked jobs for roofing, HVAC, remodeling, and general contracting
                  businesses.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Lead Response</h4>
                      <p className="text-muted-foreground">
                        Homeowners call when you're on the job site. We answer every call, chat, and form submission.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Estimate Appointment Booking</h4>
                      <p className="text-muted-foreground">
                        We schedule on-site estimates and consultations directly into your calendar.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Project Details Collection</h4>
                      <p className="text-muted-foreground">
                        We gather key project information so you arrive prepared for every estimate.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Persistent Follow-Up</h4>
                      <p className="text-muted-foreground">
                        Most contractors lose 30-40% of leads. We follow up until the job is booked.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => handleBookDemo("Construction")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Construction Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/teamwwd.jpeg"
                  alt="Task4Leads team and services overview"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What We Do</h2>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Our team of experts provides comprehensive lead generation and conversion services:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Lead Generation</h4>
                      <p className="text-muted-foreground">Help keep your company's pipeline full with cold calling and nurturing each prospect.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Follow-Up & Appointments</h4>
                      <p className="text-muted-foreground">Professional follow-up to set appointments and move prospects down your sales funnel.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Data Management</h4>
                      <p className="text-muted-foreground">Help your team create targeted lists by area and clean data by removing duplicates.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Skip Tracing</h4>
                      <p className="text-muted-foreground">Advanced skip tracing services to locate contacts and verify information.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Universal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Leads Are Slipping Through the Cracks</h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Most businesses lose 30–40% of leads because nobody follows up fast enough.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6 text-center">
                  <PhoneCall className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Missed Calls</h3>
                  <p className="text-muted-foreground">Prospects call when you're busy with clients</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Unread Messages</h3>
                  <p className="text-muted-foreground">Website visitors leave without connecting</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-destructive mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Lost Revenue</h3>
                  <p className="text-muted-foreground">Every missed lead is money left on the table</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">We Handle the Follow-Up For You</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our team responds instantly to calls, chats, and forms, follows up with SMS and email, and books qualified
              prospects directly into your calendar.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Lead Comes In</h3>
                  <p className="text-sm text-muted-foreground">Call, chat, or form submission</p>
                </CardContent>
              </Card>

              <div className="hidden md:flex justify-center">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center">
                  <Clock className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Instant Follow-Up</h3>
                  <p className="text-sm text-muted-foreground">We respond within minutes</p>
                </CardContent>
              </Card>

              <div className="hidden md:flex justify-center">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Booked Appointment</h3>
                  <p className="text-sm text-muted-foreground">Scheduled in your calendar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Trusted Across Industries</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <img
                      src="/mike-rodriguez.jpg"
                      alt="Mike Rodriguez, Rodriguez Roofing owner"
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-6 text-pretty">
                    "Task4Leads helped us turn more calls into real jobs. Our booking rate went up 60% in the first
                    month."
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold">Mike Rodriguez</p>
                    <p className="text-muted-foreground">Rodriguez Roofing, Texas</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                      <Heart className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-6 text-pretty">
                    "During AEP, we couldn't keep up with Medicare inquiries. Task4Leads handled the overflow and booked
                    qualified appointments."
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-muted-foreground">Medicare Advisor, California</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Simple, Flat Monthly Pricing</h2>
            <p className="text-xl mb-12 text-primary-foreground/90 text-pretty">
              $1,500/month — one new client pays for the service.
            </p>

            <Card className="bg-white text-foreground max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">$1,500</div>
                  <div className="text-muted-foreground">per month</div>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>24/7 lead response</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>SMS & email follow-up</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Calendar booking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Lead qualification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Works for all industries</span>
                  </li>
                </ul>

                <Button
                  onClick={() => handleBookDemo()}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Get Started Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Stop Losing Leads. Start Booking Appointments.
          </h2>
          <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto text-pretty">
            Join businesses across Medicare, Real Estate, and Construction who've transformed their lead conversion with
            Task4Leads.
          </p>
          <Button
            size="lg"
            onClick={() => handleBookDemo()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
          >
            Schedule a Free Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">T4L</span>
              </div>
              <a
                href="https://task4leads.com/"
                className="text-xl font-bold hover:text-primary-foreground/80 transition-colors"
              >
                Task4Leads
              </a>
            </div>

            <nav className="flex space-x-8 mb-4 md:mb-0">
              <a
                href="#medicare"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Medicare
              </a>
              <a
                href="#real-estate"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Real Estate
              </a>
              <a
                href="#construction"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Construction
              </a>
            </nav>

            <div className="text-primary-foreground/80 text-center md:text-right">
              <p className="mb-2">
                <a href="https://task4leads.com/" className="hover:text-primary-foreground transition-colors">
                  https://task4leads.com/
                </a>
              </p>
              <p className="mb-1">
                <a
                  href="tel:+19362339064"
                  className="hover:text-primary-foreground transition-colors flex items-center justify-center md:justify-end"
                >
                  <PhoneCall className="h-4 w-4 mr-2" />
                  (936) 233-9064
                </a>
              </p>
              <p className="mb-1">
                <a href="mailto:Info@task4leads.com" className="hover:text-primary-foreground transition-colors">
                  Info@task4leads.com
                </a>
              </p>
              <p className="text-sm">5511 Parkcrest Dr. Suite 103</p>
              <p className="text-sm">Austin, TX 78731</p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Task4Leads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
