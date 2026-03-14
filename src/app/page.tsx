import BlurFade from "@/components/magicui/blur-fade";
import { SectionLabel } from "@/components/section-label";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { OpenSourceCard } from "@/components/open-source-card";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <article className="prose prose-invert max-w-full text-pretty font-sans text-sm text-muted-foreground">
            <p className="mb-2 mt-2">
              I'm a{" "}
              <span className="text-yellow-200 font-semibold">
                fullstack engineer
              </span>{" "}
              focused on building modern, accessible, human-centered products.
            </p>
            I taught myself to code when I was in middle school (while most were
            trying to survive algebra). Since then, it's been a nonstop journey
            of leveling up and expanding my skill set. Recently, I've been
            diving into <span className="text-yellow-200">open source</span>{" "}
            because, hey, it's time to give back. On the side, I freelance on
            Fiverr, where I've teamed up with{" "}
            <span className="text-yellow-200">
              70+ clients from 11 countries
            </span>
            , turning their ideas into web realities. As for the startup world,
            I was a <span className="text-yellow-200">founding engineer</span>{" "}
            at Guideasy — a remote travel startup,{" "}
            <span className="text-yellow-200">building the MVP</span> from
            scratch. Then, I worked at a{" "}
            <span className="text-yellow-200">software agency</span> based in
            London, UK. Currently, I'm a Senior Software Engineer at Navigator
            Labs , architecting{" "}
            <span className="text-yellow-200">AI-powered solutions </span>
            for the Vero team.
          </article>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                location={work.location}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={education.start}
                location="Dhaka, Bangladesh"
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <SectionLabel>Projects</SectionLabel>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest works
                </h2>
                <p className="text-muted-foreground text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorite ones.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <SectionLabel>Open Source</SectionLabel>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                  Software should be free!
                </h2>
                <p className="text-muted-foreground text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love contributing to open source projects. It's a great way
                  to collaborate with developers worldwide, learn new things,
                  and give back to the community.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.openSource.map((project, id) => (
              <BlurFade
                key={project.name}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <OpenSourceCard
                  name={project.name}
                  stars={project.stars}
                  details={project.details}
                  repo={project.repo}
                  fork={project.fork}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <SectionLabel>What&apos;s Next?</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get In Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you have a project to discuss or just want to say hi, my
                inbox is open for all!
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
