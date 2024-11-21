import { useEffect } from 'react';
import { 
  Map, 
  Mail, 
  Calendar, 
  Code, 
  Users, 
  CheckCircle, 
  ArrowRight,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { HeroSection } from './sections/HeroSection';
import { MapSection } from './sections/MapSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HowToSection } from './sections/HowToSection';
import { IntegrationSection } from './sections/IntegrationSection';
import { CommunitySection } from './sections/CommunitySection';
import { Footer } from './Footer';

export const LandingPage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MapSection />
      <FeaturesSection />
      <HowToSection />
      <IntegrationSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};