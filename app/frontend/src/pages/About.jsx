import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockData } from '../data/mock';
import { Award, Briefcase, Code2, GraduationCap, User } from 'lucide-react';

const About = () => {
  const { personal, education, experience, skills, achievements } = mockData;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded"></div>
          </div>

          {/* Introduction */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {personal.summary}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently in my {personal.year} at {personal.university}, I'm focused on mastering the MERN stack
                and building projects that solve real-world problems. My journey in software development is driven by
                curiosity and a passion for creating efficient, scalable applications.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200 text-center">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{education.degree}</h3>
                <p className="text-muted-foreground">{education.university}</p>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  <Badge variant="secondary" className="bg-blue-900/40 text-blue-400 border border-blue-700">
                    {education.duration}
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-900/40 text-blue-400 border border-blue-700">
                    {education.currentYear}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-blue-600" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Languages */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground text-center">
                    Languages & Fundamentals
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.languages.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-500 text-blue-400 hover:bg-blue-900/40 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground text-center">
                    Frontend Development
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.frontend.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-500 text-blue-400 hover:bg-blue-900/40 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground text-center">
                    Backend Development
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.backend.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground text-center">
                    Database
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.database.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground text-center">
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.tools.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="mr-2 text-blue-600">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="mb-8 border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                Achievements & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">✓</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="border-2 hover:border-blue-600 transition-all duration-200">
            <CardHeader>
              <CardTitle>Interests & Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm passionate about staying updated with the latest technologies and continuously improving my
                problem-solving skills. My interests include:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-muted-foreground flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Building scalable full-stack web applications</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Solving complex Data Structures and Algorithms problems</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Contributing to open-source projects</span>
                </li>
                <li className="text-muted-foreground flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Preparing for top tech company interviews</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;