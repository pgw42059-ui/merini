import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="max-w-md mx-auto text-center">
          <Button asChild size="lg" className="gap-2">
            <Link to="/start">
              구조부터 배우기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
