export const doughnutLegends = [
  { title: "Food", color: "bg-blue-500" },
  { title: "Health", color: "bg-teal-600" },
  { title: "Luxury", color: "bg-purple-600" },
  { title: "Travel", color: "bg-purple-600" },
  { title: "Others", color: "bg-purple-600" },
];

export const lineLegends = [
  { title: "Income", color: "bg-teal-600" },
  { title: "Expense", color: "bg-purple-600" },
];

export const barLegends = [
  { title: "Shoes", color: "bg-teal-600" },
  { title: "Bags", color: "bg-purple-600" },
];
// let datai;

// async function find() {
//   async function getApiData() {
//     let response = await fetch(
//       "http://localhost:4000/api/v1/transactions-all",
//       {
//         headers: {
//           "x-access-token": localStorage.getItem("ResponseToken"),
//         },
//       }
//     );
//     // do something
//     response = await response.json();

//     // update the state
//     datai = response.data;
//   }
//   await getApiData();
//   const ans = datai.map((idx) => idx.category);

//   ans.forEach((element) => {
//     elementCounts[element] = (elementCounts[element] || 0) + 1;
//   });
//   console.log(elementCounts);
// }
// find();

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [
          // elementCounts.Food,
          // elementCounts.Health,
          // elementCounts.Luxury,
          // elementCounts.Travel,
          // elementCounts.Others,
          20, 30, 40, 50, 20,
        ],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ["#0694a2", "#1c64f2", "#7e3af2"],
        label: "Dataset 1",
      },
    ],
    labels: ["Shoes", "Shirts", "Bags"],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
};

export const lineOptions = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Organic",
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: "#0694a2",
        borderColor: "#0694a2",
        data: [43, 48, 40, 54, 67, 73, 70],
        fill: false,
      },
      {
        label: "Paid",
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: "#7e3af2",
        borderColor: "#7e3af2",
        data: [24, 50, 64, 74, 52, 51, 65],
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
    },
  },
  legend: {
    display: false,
  },
};

export const barOptions = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Shoes",
        backgroundColor: "#0694a2",
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: "Bags",
        backgroundColor: "#7e3af2",
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
};
