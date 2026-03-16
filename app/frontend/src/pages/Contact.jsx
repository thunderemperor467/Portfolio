import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { mockData } from '../data/mock';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { personal } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
        setIsSubmitting(false);
    }
};

  const socialLinks = [
    {
      name: 'Email',
      value: personal.email,
      icon: Mail,
      link: `mailto:${personal.email}`,
      color: 'text-blue-600',
    },
    {
      name: 'Phone',
      value: personal.phone,
      icon: Phone,
      link: `tel:${personal.phone}`,
      color: 'text-green-600',
    },
    {
      name: 'GitHub',
      value: 'thunderemperor467',
      icon: Github,
      link: personal.github,
      color: 'text-gray-800 dark:text-gray-200',
    },
    {
      name: 'LinkedIn',
      value: 'adityachauhan2307',
      icon: Linkedin,
      link: personal.linkedin,
      color: 'text-blue-700',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2 hover:border-blue-600 transition-all duration-200">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="focus:border-blue-600 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 hover:border-blue-600 transition-all duration-200 text-center">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    You can also reach me through these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg border border-border hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-200 group"
                      >
                        <div className={`p-2 rounded-lg bg-secondary group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors`}>
                          <Icon className={`h-5 w-5 ${social.color}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{social.name}</p>
                          <p className="text-sm text-muted-foreground">{social.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Availability Card */}
              <Card className="border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background">
                <CardHeader>
                  <CardTitle className="text-blue-600">Currently Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I'm actively looking for internship opportunities and freelance projects.
                    Feel free to reach out if you have an exciting opportunity!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;