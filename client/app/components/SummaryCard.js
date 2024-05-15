import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SummaryCard = ({ title, value }) => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-2xl font-bold'>{value}</p>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
