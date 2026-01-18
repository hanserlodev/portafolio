'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import { personalInfo, aboutMe, skills } from '@/data/personal';
import { MapPin, Mail, Download } from 'lucide-react';

export default function AboutPage() {
    const skillsByCategory = {
        frontend: skills.filter((s) => s.category === 'frontend'),
        backend: skills.filter((s) => s.category === 'backend'),
        tools: skills.filter((s) => s.category === 'tools'),
    };

    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <SectionTitle subtitle="Conoce más sobre mí y mis habilidades">
                    Sobre Mí
                </SectionTitle>

                {/* Profile Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {/* Avatar */}
                    <div className="md:col-span-1">
                        <div className="sticky top-24">
                            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-1 mb-6">
                                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center text-6xl font-bold">
                                    {personalInfo.name.charAt(0)}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin size={18} />
                                    {personalInfo.location}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Mail size={18} />
                                    {personalInfo.email}
                                </div>
                            </div>

                            {personalInfo.resumeUrl && (
                                <a
                                    href={personalInfo.resumeUrl}
                                    download
                                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 mt-6 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
                                >
                                    <Download size={18} />
                                    Descargar CV
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                {personalInfo.role}
                            </h3>
                            <div className="prose prose-neutral dark:prose-invert max-w-none">
                                {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-muted-foreground mb-4">
                                        {paragraph.trim()}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Puntos destacados</h4>
                            <ul className="space-y-2">
                                {aboutMe.highlights.map((highlight, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-muted-foreground"
                                    >
                                        <span className="text-primary mt-1">▸</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        Habilidades Técnicas
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Frontend */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-primary">
                                Frontend
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skillsByCategory.frontend.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="px-3 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-primary">
                                Backend
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skillsByCategory.backend.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="px-3 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-primary">
                                Herramientas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skillsByCategory.tools.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="px-3 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
