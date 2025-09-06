import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const highlights = [
  "8+ years of software development expertise",
  "Experience with Node.js, Java Spring, Python, and TypeScript",
  "Worked at top companies like Indeed, Myntra, and Paytm",
  "Built scalable systems handling millions of users",
  "Passionate about learning and implementing new technologies"
]

const personalDetails = [
  { heading: "Current City", value: "Lucknow" },
  { heading: "Email", value: "rajatsri94@gmail.com" },
]

const quotes = [
  "Credentials are like potential energy, the compliments of a name on paper, in documents, word of mouth, but faith is like kinetic energy, the motion and the force that which is witnessed. Hence in the end it is the faith rather than the credentials that really takes you places.",
  "Take the path less traveled and learn from your mistakes. Don't just let life happen around you; control your future. Learn to ask questions, set small goals, and dream of big ones."
]

export function AboutSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={elementRef} className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Highly effective software developer offering a wealth of more than 3+ years of relevant expertise. 
                A valuable team player who also is personable and dedicated. Seeking the chance to bring further 
                success to an established organisation through development, testing, and software debugging.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Highlights</h3>
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
              <h3 className="text-xl font-semibold mb-4">Philosophy</h3>
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