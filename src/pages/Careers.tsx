import { Briefcase, Users, Clock, MapPin, Mail, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Careers = () => {
  const benefits = [
    {
      title: "Professional Development",
      description: "Continuous learning opportunities and skill enhancement programs"
    },
    {
      title: "Collaborative Environment",
      description: "Work with passionate educators and technology professionals"
    },
    {
      title: "Competitive Compensation",
      description: "Fair and competitive salary packages with performance bonuses"
    },
    {
      title: "Flexible Schedule",
      description: "Balanced work-life schedule with flexible teaching hours"
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art classrooms and technology resources"
    },
    {
      title: "Career Growth",
      description: "Clear advancement paths and leadership opportunities"
    }
  ];

  const requirements = [
    "Bachelor's degree in relevant field (IT, Engineering, Accounting, or related)",
    "Minimum 3 years of professional experience in the field",
    "Strong communication skills in Dari/Pashto and English",
    "Experience with modern teaching methodologies",
    "Industry certifications (preferred)",
    "Passion for education and student development"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Be part of Afghanistan's leading IT education center and help shape the future of technology professionals.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="border-accent/20 bg-accent/5">
            <Briefcase className="h-4 w-4" />
            <AlertDescription className="text-lg">
              <strong>Current Status:</strong> We are not currently accepting applications for new positions. 
              However, we encourage qualified professionals to submit their resumes for future opportunities. 
              We will contact suitable candidates when positions become available.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Why Join AZITCC */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Join AZITCC?</h2>
            <p className="text-xl text-muted-foreground">
              Discover the benefits of being part of our educational mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What We Look For</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We seek passionate educators and industry professionals who are committed to excellence 
                in education and student success. Our ideal candidates combine technical expertise with 
                strong teaching abilities.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Open Departments:</h3>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                    <Building className="h-5 w-5 text-accent" />
                    <span>Information Technology Department</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                    <Building className="h-5 w-5 text-accent" />
                    <span>Engineering Software Department</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                    <Building className="h-5 w-5 text-accent" />
                    <span>Accounting Software Department</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">General Requirements</CardTitle>
                  <CardDescription>
                    Basic qualifications for all instructor positions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How to Apply</h2>
            <p className="text-xl text-muted-foreground">
              Ready to join our mission? Here's how to get started.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Submit Your Application</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Even though we don't have open positions right now, we're always looking for talented 
                    individuals to join our team when opportunities arise. Submit your resume and we'll 
                    keep it on file for future openings.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <span>Email: info@azitcc.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span>Visit us: Karte-parwan, Khaja Rawash Street, Home # 1165</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <span>Office Hours: Sunday - Thursday, 8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background p-6 rounded-xl border">
                  <h4 className="text-lg font-semibold text-primary mb-4">Required Documents:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Updated Resume/CV</li>
                    <li>• Cover Letter</li>
                    <li>• Academic Transcripts</li>
                    <li>• Professional Certifications</li>
                    <li>• Work Portfolio (if applicable)</li>
                    <li>• References (minimum 2)</li>
                  </ul>
                  
                  <Button className="w-full mt-6 bg-accent hover:bg-accent/90">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Application
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Culture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At AZITCC, we foster an environment of collaboration, innovation, and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Collaborative</h3>
              <p className="text-muted-foreground">
                We believe in teamwork and knowledge sharing to achieve common goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Professional</h3>
              <p className="text-muted-foreground">
                Maintaining high standards of professionalism in everything we do.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Growth-Oriented</h3>
              <p className="text-muted-foreground">
                Committed to personal and professional development of our team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;