import { Container } from "@/components/dashboard/container";
import HomeCards from "@/components/domains/home/home-cards";
import { HomeChart } from "@/components/domains/home/home-chart";

export default function Home() {
  return (
    <Container>
      <HomeCards />

      <HomeChart />
    </Container>
  );
}
