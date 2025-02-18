"use client";

import { useState, useEffect } from 'react';
import { FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';
import styled from 'styled-components';


// Update your socials array to use Fi icons:
const socials = [
  {
    id: 1,
    icon: <FiLinkedin size={20} />,  // Changed from Linkedin to FiLinkedin
    href: "https://www.linkedin.com/in/mukeshvast/",
    label: "LinkedIn",
    handle: "@mukeshvast",
  },
  {
    id: 2,
    icon: <FiMail size={20} />,  // Changed from Mail to FiMail
    href: "mailto:mukesh.vast.se@gmail.com",
    label: "Email",
    handle: "mukesh.vast.se@gmail.com",
  },
  {
    id: 3,
    icon: <FiGithub size={20} />,  // Changed from Github to FiGithub
    href: "https://github.com/mukizonese",
    label: "Github",
    handle: "mukizonese",
  }
];

const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa; // Light background
  color: #495057;
  font-family: 'Inter', sans-serif;
  padding: 4rem 2rem;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialCard = styled.a`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #495057;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  }

  svg {
    color: #1864ab; // Navy blue accent
    margin-right: 1.5rem;
    flex-shrink: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #212529;
  margin-bottom: 2rem;
  font-weight: 600;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #1864ab;
    margin-top: 1rem;
  }
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.5rem;
    color: #212529;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    color: #6c757d;
  }
`;

export default function ProfessionalPage() {
  return (
    <Container>
      <ProfileHeader>
        <h1>Mukesh Vast</h1>
        <p>Full Stack Developer | Building Scalable Enterprise Solutions</p>
      </ProfileHeader>

      <Section>
        <SectionTitle>Get in Touch</SectionTitle>
        <SocialGrid>
          {socials.map((social) => (
            <SocialCard
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
              <div>
                <h3 style={{
                  color: '#212529',
                  margin: '0 0 0.5rem',
                  fontSize: '1.25rem',
                  fontWeight: 500
                }}>
                  {social.label}
                </h3>
                <p style={{ margin: 0, color: '#6c757d' }}>{social.handle}</p>
              </div>
            </SocialCard>
          ))}
        </SocialGrid>
      </Section>

    </Container>
  );
}