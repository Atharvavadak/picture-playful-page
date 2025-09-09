import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/fitness-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-8">
              COUNT REPS.{" "}
              <span className="text-primary">CORRECT POSTURE.</span>
              <br />
              TRAIN SMARTER
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              AI-powered workout assistant for accuracy, safety and result
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="hero" size="lg" className="px-12 py-4">
                GET STARTED
              </Button>
              <Button variant="hero-outline" size="lg" className="px-12 py-4">
                WATCH DEMO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;