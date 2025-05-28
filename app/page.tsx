import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sofa,
  Hammer,
  Truck,
  Award,
  Star,
  ChevronRight,
  Laptop,
  Megaphone,
  Code,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

const HomePageComponent = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <Sofa className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-stone-800">
                Mansan Partners
              </h1>
              <p className="text-xs text-stone-600">Fine Furniture</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#home"
              className="text-stone-700 hover:text-amber-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-stone-700 hover:text-amber-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-stone-700 hover:text-amber-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#faq"
              className="text-stone-700 hover:text-amber-600 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-stone-700 hover:text-amber-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-stone-100 to-amber-50 py-20"
      >
        <div className="container mx-auto px-4">
          {/* Success Message */}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-stone-800 leading-tight">
                Your Complete Partner for Furniture, Communications & Technology
                Solutions
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed">
                At Mansan Partners, we provide comprehensive solutions spanning
                custom furniture design, strategic communications, and
                cutting-edge technology services. We transform spaces and
                empower businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Explore Our Services
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-stone-300 text-stone-700 hover:bg-stone-100"
                >
                  Schedule Consultation
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-stone-600">500+ Happy Customers</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Beautiful living room with custom furniture"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <div>
                    <p className="font-semibold text-stone-800">10+ Years</p>
                    <p className="text-sm text-stone-600">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-stone-800 mb-4">
              About Mansan Partners
            </h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Founded to deliver exceptional furniture, communication
              strategies, and technology solutions, we enhance lifestyles and
              empower businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-stone-800">
                Our Story
              </h4>
              <p className="text-stone-600 leading-relaxed">
                Mansan Partners began with a vision to integrate furniture
                design, communication strategies, and technology solutions. Over
                the years, we've become a trusted partner for homes and
                businesses seeking comprehensive solutions.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Every service we offer reflects our dedication to quality,
                innovation, and client satisfaction. We believe in creating
                holistic solutions that enhance both living and working
                environments.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-stone-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">10+</div>
                  <div className="text-stone-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Craftsman working on furniture"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-stone-800 mb-4">
              Our Services
            </h3>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Comprehensive solutions in furniture design, communications, and
              technology tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-stone-800">
                  Custom Furniture Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600 text-center">
                  Bespoke furniture pieces designed and crafted specifically for
                  your space and style preferences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-stone-800">
                  Digital Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600 text-center">
                  Enhance your brand's online presence with our expert digital
                  marketing strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-stone-800">
                  Computer Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600 text-center">
                  Tailored computer solutions to optimize your business
                  operations and enhance productivity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-stone-800">
                  Online Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600 text-center">
                  Develop innovative online applications to streamline processes
                  and engage your audience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-stone-800">
                  Electronics & Gadgets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600 text-center">
                  Source cutting-edge electronics and gadgets to enhance your
                  tech infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-stone-800">
                  Consultation Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-stone-600 text-center">
                  Expert consultation across furniture, communications, and
                  technology to guide your decisions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-stone-800 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Get answers to common questions about our furniture,
              communication, and technology services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-stone-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-stone-800 hover:text-amber-600">
                  How long does it take to complete a custom furniture order?
                </AccordionTrigger>
                <AccordionContent className="text-stone-600">
                  Custom furniture orders typically take 6-12 weeks to complete,
                  depending on the complexity of the design and current order
                  volume. We'll provide you with a detailed timeline during your
                  consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-stone-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-stone-800 hover:text-amber-600">
                  What types of wood do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-stone-600">
                  We work with a wide variety of premium hardwoods including
                  oak, maple, cherry, walnut, mahogany, and more. We can also
                  source specific wood types upon request to match your design
                  preferences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-stone-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-stone-800 hover:text-amber-600">
                  Do you offer warranties on your furniture?
                </AccordionTrigger>
                <AccordionContent className="text-stone-600">
                  Yes, all our custom furniture comes with a 5-year warranty
                  covering craftsmanship and structural integrity. We also offer
                  maintenance services to keep your furniture looking its best
                  for years to come.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-stone-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-stone-800 hover:text-amber-600">
                  Can you work within my budget?
                </AccordionTrigger>
                <AccordionContent className="text-stone-600">
                  We work with clients across various budget ranges. During our
                  consultation, we'll discuss your budget and design preferences
                  to create a solution that meets both your needs and financial
                  requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-stone-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-stone-800 hover:text-amber-600">
                  Do you provide design consultations?
                </AccordionTrigger>
                <AccordionContent className="text-stone-600">
                  Yes, we offer comprehensive design consultations where our
                  experts will visit your space, understand your needs, and
                  provide professional recommendations. The initial consultation
                  is complimentary for potential custom orders.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-stone-800 mb-4">
              Get In Touch
            </h3>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Ready to start your furniture, communication, or technology
              journey? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Phone</h4>
                  <p className="text-stone-600">08062338872</p>
                  <p className="text-sm text-stone-500">Mon-Fri 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Email</h4>
                  <p className="text-stone-600">mansanpartners@gmail.com</p>
                  <p className="text-sm text-stone-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">Address</h4>
                  <p className="text-stone-600">
                    123 Craftsman Avenue
                    <br />
                    Furniture District, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-stone-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Sofa className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Mansan Partners</h4>
                  <p className="text-xs text-stone-400">Fine Furniture</p>
                </div>
              </div>
              <p className="text-stone-400 text-sm">
                Crafting beautiful, custom furniture for over 25 years. Quality,
                craftsmanship, and customer satisfaction are our top priorities.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm text-stone-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Custom Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Restoration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Delivery & Setup
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-stone-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <ul className="space-y-2 text-sm text-stone-400">
                <li>123 Craftsman Avenue</li>
                <li>Furniture District, NY 10001</li>
                <li>08062338872</li>
                <li>mansanpartners@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-8 pt-8 text-center">
            <p className="text-stone-400 text-sm">
              © 2024 Mansan Partners. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageComponent;
