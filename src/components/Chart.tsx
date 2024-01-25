import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// https://react-chartjs-2.js.org/faq/typescript
// interface Props {
//   options: ChartOptions<'doughnut'>;
//   data: ChartData<'doughnut'>;
// }

export default function Chart({ data }) {
  const labels = data.map(item => item.mes);
  const values = data.map(item => item._count.mes);

  const colors = [
    'rgb(255, 0, 0)',
    'rgb(0, 0, 255)',
    'rgb(0, 255, 0)',
    'rgb(255, 87, 51)',
    'rgb(208, 51, 255)',
    'rgb(185, 185, 185)',
  ];

  return (
    <div>
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Movimentações',
              data: values,
              backgroundColor: colors,
            },
          ],
        }}
      />
    </div>
  );
}