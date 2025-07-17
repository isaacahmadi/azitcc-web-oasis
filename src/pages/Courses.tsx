import { useState } from "react";
import { Code, Calculator, Wrench, Clock, Users, Star, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");

  const courses = [
    // IT Courses
    {
      id: 1,
      title: "Full Stack Web Development",
      department: "Information Technology",
      description: "Complete web development course covering frontend and backend technologies including React, Node.js, and databases.",
      duration: "6 months",
      level: "Beginner to Advanced",
      students: 45,
      rating: 4.8,
      features: ["HTML/CSS/JavaScript", "React.js", "Node.js", "MongoDB", "Portfolio Projects"],
      price: "Contact for pricing",
      icon: Code,
      category: "it"
    },
    {
      id: 2,
      title: "Cybersecurity Fundamentals",
      department: "Information Technology",
      description: "Learn essential cybersecurity skills including network security, ethical hacking, and security best practices.",
      duration: "4 months",
      level: "Intermediate",
      students: 32,
      rating: 4.7,
      features: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Tools", "Certification Prep"],
      price: "Contact for pricing",
      icon: Code,
      category: "it"
    },
    {
      id: 3,
      title: "Database Design & Management",
      department: "Information Technology",
      description: "Master database concepts, SQL, and database administration for both relational and NoSQL databases.",
      duration: "2 months",
      level: "Beginner",
      students: 28,
      rating: 4.6,
      features: ["SQL Mastery", "Database Design", "MySQL", "MongoDB", "Performance Optimization"],
      price: "Contact for pricing",
      icon: Code,
      category: "it"
    },
    
    // Engineering Courses
    {
      id: 4,
      title: "AutoCAD Professional",
      department: "Engineering Software",
      description: "Comprehensive AutoCAD training from basics to advanced 3D modeling and technical drawing standards.",
      duration: "3 months",
      level: "Beginner to Advanced",
      students: 38,
      rating: 4.9,
      features: ["2D Drafting", "3D Modeling", "Technical Standards", "Project Workflow", "Portfolio Creation"],
      price: "Contact for pricing",
      icon: Wrench,
      category: "engineering"
    },
    {
      id: 5,
      title: "SolidWorks Design",
      department: "Engineering Software",
      description: "Professional 3D CAD design using SolidWorks for mechanical engineering and product development.",
      duration: "4 months",
      level: "Intermediate",
      students: 25,
      rating: 4.8,
      features: ["3D Part Design", "Assembly Design", "Technical Drawings", "Simulation Basics", "Design Projects"],
      price: "Contact for pricing",
      icon: Wrench,
      category: "engineering"
    },
    {
      id: 6,
      title: "Civil 3D for Infrastructure",
      department: "Engineering Software",
      description: "Advanced Civil 3D training for infrastructure design, surveying, and civil engineering projects.",
      duration: "3 months",
      level: "Advanced",
      students: 20,
      rating: 4.7,
      features: ["Site Design", "Road Design", "Pipe Networks", "Grading", "Survey Data"],
      price: "Contact for pricing",
      icon: Wrench,
      category: "engineering"
    },
    
    // Accounting Courses
    {
      id: 7,
      title: "QuickBooks Professional",
      department: "Accounting Software",
      description: "Master QuickBooks for small business accounting, invoicing, payroll, and financial reporting.",
      duration: "2 months",
      level: "Beginner to Advanced",
      students: 35,
      rating: 4.8,
      features: ["Company Setup", "Invoicing", "Payroll", "Financial Reports", "Tax Preparation"],
      price: "Contact for pricing",
      icon: Calculator,
      category: "accounting"
    },
    {
      id: 8,
      title: "Tally ERP Mastery",
      department: "Accounting Software",
      description: "Comprehensive Tally ERP training covering accounting, inventory, payroll, and business management.",
      duration: "3 months",
      level: "Intermediate",
      students: 42,
      rating: 4.6,
      features: ["Accounting Fundamentals", "Inventory Management", "GST & Taxation", "Payroll", "MIS Reports"],
      price: "Contact for pricing",
      icon: Calculator,
      category: "accounting"
    },
    {
      id: 9,
      title: "Excel Advanced for Finance",
      department: "Accounting Software",
      description: "Advanced Excel techniques for financial analysis, modeling, and business intelligence.",
      duration: "1 month",
      level: "Intermediate",
      students: 55,
      rating: 4.9,
      features: ["Financial Functions", "Pivot Tables", "Data Analysis", "Financial Modeling", "Dashboard Creation"],
      price: "Contact for pricing",
      icon: Calculator,
      category: "accounting"
    }
  ];

  const levels = ["All", "Beginner", "Intermediate", "Advanced", "Beginner to Advanced"];

  const filteredCourses = selectedLevel === "All" 
    ? courses 
    : courses.filter(course => course.level === selectedLevel);

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-accent/10 rounded-lg">
              <course.icon className="h-5 w-5 text-accent" />
            </div>
            <Badge variant="secondary" className="text-xs">{course.department}</Badge>
          </div>
          <Badge variant="outline">{course.level}</Badge>
        </div>
        
        <CardTitle className="text-xl group-hover:text-accent transition-colors">
          {course.title}
        </CardTitle>
        
        <CardDescription className="text-base leading-relaxed">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>

        {/* Course Features */}
        <div>
          <h4 className="font-medium text-primary mb-2">What you'll learn:</h4>
          <div className="space-y-1">
            {course.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
            {course.features.length > 3 && (
              <div className="text-sm text-accent">+{course.features.length - 3} more topics</div>
            )}
          </div>
        </div>

        {/* Price and Action */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-primary">{course.price}</span>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Enroll Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Courses</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our comprehensive range of professional courses designed to advance your career 
            in technology and business.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by level:</span>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className={selectedLevel === level ? "bg-accent hover:bg-accent/90" : ""}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="it">IT</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="accounting">Accounting</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="it">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.filter(course => course.category === "it").map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="engineering">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.filter(course => course.category === "engineering").map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="accounting">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.filter(course => course.category === "accounting").map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to enroll in any of our professional courses and advance your career.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Contact Us for Enrollment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;