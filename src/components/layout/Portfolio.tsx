import type { ReactNode } from 'react';
import { ThemeProvider } from '@/context/ThemeProvider';
import { PointerProvider } from '@/context/PointerProvider';
import { ScrollProvider } from '@/context/ScrollProvider';
import { ScrollContainer } from '@/components/layout/ScrollContainer';
import { ProgressBar } from '@/components/layout/ProgressBar';
import { NavRail } from '@/components/layout/NavRail';
import { MobileScrollNav } from '@/components/layout/MobileScrollNav';
import { TopActions } from '@/components/layout/TopActions';
import { SectionShell } from '@/components/layout/SectionShell';
import { Hero } from '@/components/sections/Hero/Hero';
import { FloatingShapes } from '@/components/sections/Hero/FloatingShapes';
import { About } from '@/components/sections/About/About';
import { Skills } from '@/components/sections/Skills/Skills';
import { Projects } from '@/components/sections/Projects/Projects';
import { Process } from '@/components/sections/Process/Process';
import { Experience } from '@/components/sections/Experience/Experience';
import { Languages } from '@/components/sections/Languages/Languages';
import { Playground } from '@/components/sections/Playground/Playground';
import { Contact } from '@/components/sections/Contact/Contact';
import { SECTIONS, type SectionMeta } from '@/data/sections';
import styles from './Portfolio.module.css';

function renderSectionContent(section: SectionMeta): ReactNode {
  switch (section.id) {
    case 'hero':
      return <Hero />;
    case 'about':
      return <About />;
    case 'skills':
      return <Skills />;
    case 'work':
      return <Projects />;
    case 'process':
      return <Process />;
    case 'experience':
      return <Experience />;
    case 'languages':
      return <Languages />;
    case 'playground':
      return <Playground />;
    case 'contact':
      return <Contact />;
    default:
      throw new Error(`No section component registered for id "${section.id}"`);
  }
}

function renderSectionDecoration(section: SectionMeta): ReactNode {
  switch (section.id) {
    case 'hero':
      return <FloatingShapes />;
    default:
      return undefined;
  }
}

export function Portfolio() {
  return (
    <ThemeProvider>
      <PointerProvider>
        <ScrollProvider>
          <div className={styles.root}>
            <ProgressBar />
            <NavRail />
            <MobileScrollNav />
            <TopActions />
            <ScrollContainer>
              {SECTIONS.map((section, index) => (
                <SectionShell
                  key={section.id}
                  index={index}
                  label={section.navLabel}
                  decoration={renderSectionDecoration(section)}
                >
                  {renderSectionContent(section)}
                </SectionShell>
              ))}
            </ScrollContainer>
          </div>
        </ScrollProvider>
      </PointerProvider>
    </ThemeProvider>
  );
}
