import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/6ab42cbd-5b05-4cfe-b716-e07677e4f82d.png" 
                alt="AZITCC Logo" 
                className="h-12 w-12 bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-xl font-bold">AZITCC</h3>
                <p className="text-sm opacity-90">Advanced Zone of Information Technology Certification Center</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-md">
              Leading IT education and certification center in Kabul, Afghanistan. 
              Empowering students with cutting-edge technology skills and professional development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/departments" className="opacity-80 hover:opacity-100 transition-opacity">Departments</Link></li>
              <li><Link to="/courses" className="opacity-80 hover:opacity-100 transition-opacity">Courses</Link></li>
              <li><Link to="/careers" className="opacity-80 hover:opacity-100 transition-opacity">Careers</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 opacity-80" />
                <p className="opacity-80">
                  Kabul Afghanistan, Karte-parwan,<br />
                  Khaja Rawash Street, Home # 1165
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="opacity-80" />
                <p className="opacity-80">+93 744 344 555</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="opacity-80" />
                <p className="opacity-80">info@azitcc.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-70">
            © 2024 AZITCC - Advanced Zone of Information Technology Certification Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;