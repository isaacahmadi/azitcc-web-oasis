import { Link } from "react-router-dom";
import { GraduationCap, Users, Award, ArrowRight, Code, Calculator, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroClassroom from "@/assets/male-instructors-classroom.jpg";
import teachersTeam from "@/assets/male-teachers-team.jpg";
import itDepartment from "@/assets/it-department.jpg";
import accountingSoftware from "@/assets/accounting-software.jpg";

const Index = () => {
  const departments = [
    {
      title: "Information Technology",
      description: "Comprehensive IT courses including programming, networking, and cybersecurity",
      icon: Code,
      image: itDepartment,
      courses: ["Web Development", "Network Administration", "Cybersecurity", "Database Management"]
    },
    {
      title: "Engineering Software",
      description: "Professional engineering software training for CAD, simulation, and design",
      icon: Wrench,
      image: itDepartment,
      courses: ["AutoCAD", "SolidWorks", "MATLAB", "Civil 3D"]
    },
    {
      title: "Accounting Software",
      description: "Master popular accounting and financial management software",
      icon: Calculator,
      image: itDepartment,
      courses: ["QuickBooks", "Tally", "Peachtree", "Excel Advanced"]
    }
  ];

  const stats = [
    { number: "500+", label: "Students Graduated" },
    { number: "15+", label: "Professional Courses" },
    { number: "10+", label: "Expert Instructors" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroClassroom})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced Zone of Information Technology Certification Center
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Empowering Afghanistan's future through professional IT education, engineering software training, 
              and cutting-edge web development services in the heart of Kabul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Departments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our specialized departments offering comprehensive training in the most in-demand 
              technology and professional skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={dept.image} 
                    alt={dept.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <dept.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{dept.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {dept.courses.map((course, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">• {course}</div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/courses">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Leading IT Education in Afghanistan
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AZITCC has been at the forefront of technology education in Kabul, providing world-class 
                training in IT, engineering software, and professional development. Our experienced 
                instructors and modern facilities ensure students receive the highest quality education.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Certified professional instructors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span>Small class sizes for personalized attention</span>
                </li>
                <li className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span>Industry-recognized certifications</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img 
                src={teachersTeam} 
                alt="Professional instructors at AZITCC"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your IT Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of students who have advanced their careers through our comprehensive programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/courses">View All Courses</Link>
            </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary bg-white/10">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
