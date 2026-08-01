import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UnderlinedText from "@/components/UnderlinedText";
import CityScoreIllustration from "@/components/CityScoreIllustration";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-8">
      <div className="w-full flex justify-center items-center rounded-lg">
        <CityScoreIllustration />
      </div>
      <div>
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle>
              <h1 className="max-w-md mx-auto text-4xl font-bold text-center leading-tight">
                See the <UnderlinedText>all</UnderlinedText> cities and their
                best fitting score to your desires
              </h1>
            </CardTitle>
            <CardDescription className="max-w-md mx-auto text-muted-foreground text-center text-xl mt-4">
              Fill the onboarding form and get the best fitting score to your
              desires
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
