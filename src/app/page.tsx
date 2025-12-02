import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container className="flex justify-center h-screen items-center p-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl">Sand Grain Size Mapping</h1>
        <Button>Get Started</Button>
      </div>
    </Container>
  );
}
