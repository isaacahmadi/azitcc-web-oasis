import { GraduationCap, Users, Award, Target, Heart, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teachersTeam from "@/assets/male-teachers-team.jpg";
import heroClassroom from "@/assets/male-instructors-classroom.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We are committed to providing the highest quality education with modern teaching methods and industry-standard curriculum."
    },
    {
      icon: Heart,
      title: "Student-Centered Approach",
      description: "Every student is unique. We provide personalized attention and support to help each student achieve their goals."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Our courses are designed to meet international standards, preparing students for global career opportunities."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "We believe in contributing to Afghanistan's technological advancement and economic development through education."
    }
  ];

  const achievements = [
    { number: "500+", label: "Graduates", icon: GraduationCap },
    { number: "15+", label: "Professional Courses", icon: Award },
    { number: "10+", label: "Expert Instructors", icon: Users },
    { number: "5+", label: "Years of Excellence", icon: CheckCircle }
  ];

  const team = [
    {
      name: "Mohammad Ahmad Ahmadi",
      position: "Director & Senior IT Instructor",
      expertise: "Full Stack Development, Network Security",
      experience: "8+ years"
    },
    {
      name: "Abdul Rahman Qaderi",
      position: "Lead Accounting Instructor",
      expertise: "Financial Management, ERP Systems",
      experience: "6+ years"
    },
    {
      name: "Ahmad Reza Mohammadi",
      position: "Senior Engineering Software Instructor",
      expertise: "CAD Design, Technical Drawing",
      experience: "10+ years"
    },
    {
      name: "Hassan Ali Nazari",
      position: "IT Training Coordinator",
      expertise: "Database Management, Web Development",
      experience: "5+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroClassroom})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About AZITCC</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Leading the way in professional IT education and certification in Afghanistan since 2019.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At AZITCC, our mission is to empower the youth of Afghanistan with cutting-edge technology skills 
                and professional competencies that will drive the nation's digital transformation. We are committed 
                to providing world-class education in Information Technology, Engineering Software, and Accounting 
                Software training.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We bridge the gap between academic learning and industry requirements, ensuring our graduates 
                are job-ready and equipped with practical skills that meet international standards.
              </p>
            </div>
            <div>
              <img 
                src={teachersTeam} 
                alt="AZITCC professional instructors"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Proud milestones in our journey of educational excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <achievement.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Expert Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet our dedicated professional instructors who bring years of industry experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-accent">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2019 in the heart of Kabul, Advanced Zone of Information Technology Certification Center (AZITCC) 
              was established with a vision to bridge the technology skills gap in Afghanistan. Our founders recognized 
              the critical need for practical, industry-relevant IT education that could prepare students for the global 
              job market.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Starting with a small team of passionate educators and a modest facility in Karte-parwan, we have grown 
              to become one of the most respected IT training centers in Kabul. Our commitment to excellence and 
              student success has helped us build strong partnerships with local businesses and international organizations.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Today, AZITCC offers comprehensive training programs in Information Technology, Engineering Software, 
              and Accounting Software, serving over 500 students annually. We also provide professional web development 
              services, allowing our instructors to stay current with industry trends and bring real-world experience 
              into the classroom.
            </p>
            
            <p className="text-lg leading-relaxed">
              As we look to the future, we remain committed to our founding principles: providing quality education, 
              fostering innovation, and contributing to Afghanistan's technological advancement. Every graduate who 
              succeeds in their career is a testament to our mission and a step forward for our nation's digital future.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;