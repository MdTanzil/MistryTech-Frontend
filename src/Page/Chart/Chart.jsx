import { Chart as Chartjs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const Chart = () => {
  return (
    <div>
      <Bar
        className="m-2 lg:p-3"
        data={{
          labels: [
            "view",
            "Subscription",
            "Likes",
            "Comments",
            "share",
            "blog",
          ],
          datasets: [
            {
              label: "Analytics",
              data: [5000, 4500, 4000, 3000, 2500, 1500],
              backgroundColor: [
                "green",
                "yellow",
                "pink",
                "blue",
                "red",
                "orange",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
