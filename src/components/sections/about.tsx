import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { about, highlights, personalDetails, quotes } from "@/data/about"
import { LuGraduationCap, LuStar } from "react-icons/lu"

export function AboutSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-5 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={elementRef} className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.map((about, index) => (
                  <span key={index}>{about}</span>
                ))}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center space-x-2">
                <LuStar className="w-4 h-4 text-primary" />
                <span>Key Highlights</span>
              </h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="portfolio-card glow-on-hover">
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              <div className="space-y-3">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="font-medium">{detail.heading}</span>
                    <span className="text-muted-foreground">{detail.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="portfolio-card glow-on-hover">
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <LuGraduationCap className="w-4 h-4 text-primary" />
                <span>Philosophy</span>
              </h3>
              <div className="space-y-4">
                {quotes.map((quote, index) => (
                  <blockquote key={index} className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground text-sm leading-relaxed">
                    "{quote}"
                  </blockquote>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}