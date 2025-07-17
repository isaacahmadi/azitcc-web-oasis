import { Code, Calculator, Wrench, Users, Award, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import itDepartment from "@/assets/it-department.jpg";
import accountingSoftware from "@/assets/accounting-software.jpg";

const Departments = () => {
  const departments = [
    {
      id: "it",
      title: "Information Technology",
      description: "Comprehensive IT education covering programming, networking, cybersecurity, and modern web technologies. Our IT department prepares students for the digital future with hands-on training and industry-standard practices.",
      icon: Code,
      image: itDepartment,
      features: [
        "Programming Languages (JavaScript, Python, PHP, Java)",
        "Web Development (HTML, CSS, React, Node.js)",
        "Database Management (MySQL, MongoDB)",
        "Network Administration & Security",
        "Cloud Computing & DevOps",
        "Mobile App Development"
      ],
      courses: [
        { name: "Full Stack Web Development", duration: "6 months", level: "Beginner to Advanced" },
        { name: "Cybersecurity Fundamentals", duration: "4 months", level: "Intermediate" },
        { name: "Network Administration", duration: "3 months", level: "Intermediate" },
        { name: "Database Design & Management", duration: "2 months", level: "Beginner" },
        { name: "Cloud Computing Essentials", duration: "3 months", level: "Intermediate" },
        { name: "Mobile App Development", duration: "5 months", level: "Advanced" }
      ],
      stats: {
        students: "200+",
        instructors: "5",
        courses: "8",
        duration: "2-6 months"
      }
    },
    {
      id: "engineering",
      title: "Engineering Software",
      description: "Professional training in industry-leading engineering software for design, simulation, and analysis. Perfect for engineers, architects, and technical professionals looking to enhance their CAD and simulation skills.",
      icon: Wrench,
      image: itDepartment,
      features: [
        "2D & 3D CAD Design",
        "Structural Analysis & Simulation",
        "Civil & Architectural Design",
        "Mechanical Engineering Software",
        "Project Management Tools",
        "Technical Drawing Standards"
      ],
      courses: [
        { name: "AutoCAD Professional", duration: "3 months", level: "Beginner to Advanced" },
        { name: "SolidWorks Design", duration: "4 months", level: "Intermediate" },
        { name: "Civil 3D for Infrastructure", duration: "3 months", level: "Advanced" },
        { name: "MATLAB Programming", duration: "2 months", level: "Intermediate" },
        { name: "Revit Architecture", duration: "3 months", level: "Beginner" },
        { name: "ANSYS Simulation", duration: "4 months", level: "Advanced" }
      ],
      stats: {
        students: "150+",
        instructors: "3",
        courses: "6",
        duration: "2-4 months"
      }
    },
    {
      id: "accounting",
      title: "Accounting Software",
      description: "Master the most popular accounting and financial management software used by businesses worldwide. Our accounting department focuses on practical skills that are immediately applicable in the workplace.",
      icon: Calculator,
      image: accountingSoftware,
      features: [
        "Financial Record Management",
        "Payroll Processing",
        "Tax Preparation & Compliance",
        "Financial Reporting & Analysis",
        "Inventory Management",
        "Business Intelligence"
      ],
      courses: [
        { name: "QuickBooks Professional", duration: "2 months", level: "Beginner to Advanced" },
        { name: "Tally ERP Mastery", duration: "3 months", level: "Intermediate" },
        { name: "Excel Advanced for Finance", duration: "1 month", level: "Intermediate" },
        { name: "Peachtree Accounting", duration: "2 months", level: "Beginner" },
        { name: "SAP Financial Accounting", duration: "4 months", level: "Advanced" },
        { name: "Financial Analysis Tools", duration: "2 months", level: "Intermediate" }
      ],
      stats: {
        students: "120+",
        instructors: "3",
        courses: "6",
        duration: "1-4 months"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Departments</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our specialized departments designed to provide comprehensive training 
            in the most in-demand technology and professional skills.
          </p>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {departments.map((dept, index) => (
              <div key={dept.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <dept.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">{dept.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {dept.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <Users className="h-5 w-5 text-accent mx-auto mb-2" />
                      <div className="font-semibold text-primary">{dept.stats.students}</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <Award className="h-5 w-5 text-accent mx-auto mb-2" />
                      <div className="font-semibold text-primary">{dept.stats.instructors}</div>
                      <div className="text-sm text-muted-foreground">Instructors</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <Code className="h-5 w-5 text-accent mx-auto mb-2" />
                      <div className="font-semibold text-primary">{dept.stats.courses}</div>
                      <div className="text-sm text-muted-foreground">Courses</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <Clock className="h-5 w-5 text-accent mx-auto mb-2" />
                      <div className="font-semibold text-primary">{dept.stats.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">What You'll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {dept.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={dept.image} 
                    alt={dept.title}
                    className="rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Popular Courses</h2>
            <p className="text-xl text-muted-foreground">
              Discover some of our most popular courses across all departments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.flatMap(dept => 
              dept.courses.slice(0, 2).map((course, idx) => (
                <Card key={`${dept.id}-${idx}`} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{dept.title}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>
                      Duration: {course.duration} • Level: {course.level}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Departments;