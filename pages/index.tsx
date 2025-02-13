import { Container, Progress, Tooltip, Title, Paper } from "@mantine/core";

export const data = [
  { name: "USA", value: 400, color: "indigo.6" },
  { name: "India", value: 300, color: "yellow.6" },
  { name: "Japan", value: 100, color: "teal.6" },
  { name: "Other", value: 200, color: "gray.6" },
];

export default function IndexPage() {
  return (
    <Container my={64}>
      <Title mb={24}>This is my chart</Title>
      <Paper shadow="xs" p="xl">
        <Title mb={24}>876 / 1,282</Title>
        <Progress.Root size={12}>
          <Tooltip label="Documents – 33Gb">
            <Progress.Section value={33} color="cyan"></Progress.Section>
          </Tooltip>

          <Tooltip label="Photos – 28Gb">
            <Progress.Section value={28} color="pink"></Progress.Section>
          </Tooltip>

          <Tooltip label="Other – 15Gb">
            <Progress.Section value={15} color="orange"></Progress.Section>
          </Tooltip>
        </Progress.Root>
      </Paper>
    </Container>
  );
}
