import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/seperator';
import { mockData } from '../data/mock';
import { Download, Mail, Phone, Github, Linkedin, GraduationCap, Briefcase, FolderGit2, Award } from 'lucide-react';

const Resume = () => {
  const { personal, education, experience, projects, achievements, skills } = mockData;

  const handleDownloadResume =async () => {
    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/resume/download`);
      
      if (!response.ok) {
        throw new Error('Failed to download resume');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Aditya_Chauhan_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to download resume. Please try again later.');
    }
};


  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Download Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">{personal.name}</h1>
              <p className="text-xl text-blue-600 font-medium">{personal.title}</p>
            </div>
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>

          {/* Contact Information */}
          <Card className="mb-8 border-2">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <a href={`mailto:${personal.email}`} className="hover:text-blue-600 transition-colors">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Github className="h-4 w-4 text-blue-600" />
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    github.com/thunderemperor467
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    linkedin.com/in/adityachauhan2307
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{personal.summary}</p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{education.degree}</h3>
                <p className="text-muted-foreground font-medium">{education.university}</p>
                <p className="text-sm text-muted-foreground">{education.duration}</p>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200 text-center">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm">Languages & Fundamentals:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/40 text-blue-400 border border-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2 text-sm">Frontend & Runtime:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.frontend.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/40 text-blue-400 border border-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2 text-sm">Backend & Runtime:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.backend.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/40 text-blue-400 border border-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2 text-sm">Database:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.database.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/40 text-blue-400 border border-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2 text-sm">Tools & Platforms:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/40 text-blue-400 border border-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              {experience.map((exp, index) => (
                <div key={exp.id}>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                    <ul className="space-y-2 ml-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start text-sm">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < experience.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200 text-center">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderGit2 className="h-5 w-5 text-blue-600" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              {projects.map((project, index) => (
                <div key={project.id}>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-blue-600 text-blue-600">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-1 ml-4">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 text-blue-600">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < projects.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Achievements & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-600 font-bold">✓</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
