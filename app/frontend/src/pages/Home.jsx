import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { mockData } from "../data/mock";
import { ArrowRight, Code, Database, Layout, Terminal } from "lucide-react";
import profileImage from "../assets/resume_image.jpeg";

export default function Home() {
  const { personal, skills } = mockData;

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LEFT — Text */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-2">
              {personal.title}
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              {personal.subtitle}
            </p>

            <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              {personal.summary}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/resume">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT — Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full blur-2xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Aditya Chauhan"
                className="relative w-full h-full object-cover rounded-full border-4 border-blue-600 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>


      {/* SKILLS SECTION */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* FRONTEND */}
            <Card className="hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg w-fit mb-4">
                  <Layout className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Frontend</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {skills.frontend.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* BACKEND */}
            <Card className="hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg w-fit mb-4">
                  <Terminal className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Backend</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {skills.backend.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* DATABASE */}
            <Card className="hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg w-fit mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Database</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {skills.database.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* LANGUAGES */}
            <Card className="hover:border-blue-600 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-lg w-fit mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Languages</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {skills.languages.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-muted-foreground">DSA Problems Solved</div>
          </div>

          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>

          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">1+</div>
            <div className="text-muted-foreground">Months Experience</div>
          </div>

        </div>
      </section>

    </div>
  );
}
