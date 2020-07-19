import React, { useState } from "react";
import DataTable from "./DataTable";
import DataTableSettings from "./DataTableSettings";
import "./styles.css";

let dataSet = [
  {
    "Media Type": "Media Type",
    "Traffic Source": "Traffic Source",
    Geo: "Geo",
    Cost: "Cost",
    Impressions: "Impressions",
    Clicks: "Clicks",
    Conversions: "Conversions",
    Date: "Date",
  },
  {
    "Media Type": "Digital",
    "Traffic Source": "Google Analytics",
    Geo: "Canada",
    Cost: " $3,453.00 ",
    Impressions: "123948",
    Clicks: "28508",
    Conversions: "23%",
    Date: "14-07-2020",
  },
  {
    "Media Type": "Display",
    "Traffic Source": "Google Ads",
    Geo: "USA",
    Cost: " $252,354.00 ",
    Impressions: "432223",
    Clicks: "185856",
    Conversions: "43%",
    Date: "13-07-2020",
  },
  {
    "Media Type": "Display",
    "Traffic Source": "Facebook Pages",
    Geo: "USA",
    Cost: " $645.00 ",
    Impressions: "22085",
    Clicks: "12368",
    Conversions: "56%",
    Date: "12-07-2020",
  },
  {
    "Media Type": "Print",
    "Traffic Source": "Facebook Ads",
    Geo: "USA",
    Cost: " $67,689.00 ",
    Impressions: "457976",
    Clicks: "403019",
    Conversions: "88%",
    Date: "11-07-2020",
  },
  {
    "Media Type": "Display",
    "Traffic Source": "Youtube",
    Geo: "Korea",
    Cost: " $243,543.00 ",
    Impressions: "43234",
    Clicks: "1729",
    Conversions: "4%",
    Date: "10-07-2020",
  },
  {
    "Media Type": "Digital",
    "Traffic Source": "Snapchat",
    Geo: "Canada",
    Cost: " $51,204.08 ",
    Impressions: "34578",
    Clicks: "692",
    Conversions: "2%",
    Date: "07-07-2020",
  },
  {
    "Media Type": "Banner",
    "Traffic Source": "LinkedIn",
    Geo: "UK",
    Cost: " $12,346.00 ",
    Impressions: "43909",
    Clicks: "10099",
    Conversions: "23%",
    Date: "03-07-2020",
  },
  {
    "Media Type": "Banner",
    "Traffic Source": "Twitter",
    Geo: "USA",
    Cost: " $448.00 ",
    Impressions: "4445221",
    Clicks: "3378368",
    Conversions: "76%",
    Date: "29-06-2020",
  },
  {
    "Media Type": "Print",
    "Traffic Source": "TikTok",
    Geo: "UK",
    Cost: " $239,405.00 ",
    Impressions: "8403972",
    Clicks: "252119",
    Conversions: "3%",
    Date: "28-06-2020",
  },
  {
    "Media Type": "Print",
    "Traffic Source": "Bing",
    Geo: "Australia",
    Cost: " $4,590.00 ",
    Impressions: "44902",
    Clicks: "15267",
    Conversions: "34%",
    Date: "24-06-2020",
  },
  {
    "Media Type": "Digital",
    "Traffic Source": "AdRoll",
    Geo: "China",
    Cost: " $39,284.00 ",
    Impressions: "789087",
    Clicks: "441889",
    Conversions: "56%",
    Date: "20-06-2020",
  },
  {
    "Media Type": "Print",
    "Traffic Source": "Aggregate",
    Geo: "China",
    Cost: " $30,890.00 ",
    Impressions: "456568",
    Clicks: "31960",
    Conversions: "7%",
    Date: "18-06-2020",
  },
  {
    "Media Type": "Banner",
    "Traffic Source": "CRM",
    Geo: "Canada",
    Cost: " $51,935.13 ",
    Impressions: "124049",
    Clicks: "9924",
    Conversions: "8%",
    Date: "15-06-2020",
  },
  {
    "Media Type": "Display",
    "Traffic Source": "Custom 1",
    Geo: "Egypt",
    Cost: " $78,789.00 ",
    Impressions: "2074105",
    Clicks: "186669",
    Conversions: "9%",
    Date: "13-06-2020",
  },
  {
    "Media Type": "Banner",
    "Traffic Source": "Custom 2",
    Geo: "Canada",
    Cost: " $50,473.02 ",
    Impressions: "2200936",
    Clicks: "198084",
    Conversions: "9%",
    Date: "12-06-2020",
  },
  {
    "Media Type": "Banner",
    "Traffic Source": "Twitter",
    Geo: "Lebanon",
    Cost: " $49,741.96 ",
    Impressions: "2327767",
    Clicks: "1000940",
    Conversions: "43%",
    Date: "10-06-2020",
  },
  {
    "Media Type": "Banner",
    "Traffic Source": "Facebook Ads",
    Geo: "USA",
    Cost: " $49,010.90 ",
    Impressions: "24545",
    Clicks: "13500",
    Conversions: "55%",
    Date: "09-06-2020",
  },
  {
    "Media Type": "Print",
    "Traffic Source": "Facebook Ads",
    Geo: "Koera",
    Cost: " $48,279.85 ",
    Impressions: "754324",
    Clicks: "67889",
    Conversions: "9%",
    Date: "05-06-2020",
  },
  {
    "Media Type": "Digital",
    "Traffic Source": "Bing",
    Geo: "Germany",
    Cost: " $47,548.79 ",
    Impressions: "35867",
    Clicks: "23314",
    Conversions: "65%",
    Date: "03-06-2020",
  },
  {
    "Media Type": "Display",
    "Traffic Source": "Google Ads",
    Geo: "Japan",
    Cost: " $46,817.73 ",
    Impressions: "423536",
    Clicks: "190591",
    Conversions: "45%",
    Date: "02-06-2020",
  },
  {
    "Media Type": "Display",
    "Traffic Source": "Google Analytics",
    Geo: "Sweden",
    Cost: " $46,086.68 ",
    Impressions: "4596192",
    Clicks: "1286934",
    Conversions: "28%",
    Date: "01-06-2020",
  },
  {
    "Media Type": "Digital",
    "Traffic Source": "Youtube",
    Geo: "UAE",
    Cost: " $45,355.62 ",
    Impressions: "347786",
    Clicks: "264317",
    Conversions: "76%",
    Date: "28-05-2020",
  },
  {
    "Media Type": "Print",
    "Traffic Source": "Google Ads",
    Geo: "Qatar",
    Cost: " $44,624.56 ",
    Impressions: "23457876",
    Clicks: "10556044",
    Conversions: "45%",
    Date: "22-05-2020",
  },
  {
    "Media Type": "Print",
    "Traffic Source": "Google Ads",
    Geo: "Canada",
    Cost: " $43,893.50 ",
    Impressions: "1221235",
    Clicks: "293096",
    Conversions: "24%",
    Date: "20-05-2020",
  },
  {
    "Media Type": "Print",
    "Traffic Source": "Snapchat",
    Geo: "Canada",
    Cost: " $43,162.45 ",
    Impressions: "23564",
    Clicks: "7305",
    Conversions: "31%",
    Date: "19-05-2020",
  },
];

//format initial data value passed in
let formatData = (data) => {
  data[0].date = data[0]["Date"];
  delete data[0]["Date"];
  data[0].geo = data[0]["Geo"];
  delete data[0]["Geo"];
  data[0].mediaType = data[0]["Media Type"];
  delete data[0]["Media Type"];
  data[0].trafficSource = data[0]["Traffic Source"];
  delete data[0]["Traffic Source"];
  data[0].impressions = data[0]["Impressions"];
  delete data[0]["Impressions"];
  data[0].cost = data[0]["Cost"];
  delete data[0]["Cost"];
  data[0].clicks = data[0]["Clicks"];
  delete data[0]["Clicks"];
  data[0].conversions = data[0]["Conversions"];
  delete data[0]["Conversions"];

  if (data[1]["Cost"] !== undefined) {
    data.slice(1).forEach((d) => {
      d.date = d["Date"];
      delete d["Date"];
      d.geo = d["Geo"];
      delete d["Geo"];
      d.mediaType = d["Media Type"];
      delete d["Media Type"];
      d.trafficSource = d["Traffic Source"];
      delete d["Traffic Source"];
      d.impressions = Number(d["Impressions"]);
      delete d["Impressions"];
      d.cost = Number(d["Cost"].replace(/[^0-9.-]+/g, ""));
      delete d["Cost"];
      d.clicks = Number(d["Clicks"]);
      delete d["Clicks"];
      d.conversions = Number(
        d["Conversions"].substring(0, d["Conversions"].length - 1)
      );
      delete d["Conversions"];
    });
  }
  return data;
};

export default function App() {
  const [data, setData] = useState(formatData(dataSet));
  const [filteredData, setFilteredData] = useState(data);

  const [selectedDimensions, setSelectedDimensions] = useState([
    [
      { id: "1", content: "mediaType" },
      { id: "2", content: "trafficSource" },
      { id: "3", content: "geo" },
    ],
  ]);

  const [selectedMetrics, setSelectedMetrics] = useState([
    [
      { id: "4", content: "cost" },
      { id: "5", content: "impressions" },
      { id: "6", content: "clicks" },
      { id: "7", content: "conversions" },
    ],
  ]);

  function getMinDate(value) {
    var todayDate = new Date();
    let newDate = todayDate.getDate() - value;
    todayDate.setDate(newDate);

    return todayDate;
  }

  let filterDataByDays = (days) => {
    let minDate = getMinDate(days);
    setData(
      data.filter((d) => {
        if (d.date !== undefined) {
          let date = new Date(
            d.date.substring(6),
            d.date.substring(3, 5) - 1,
            d.date.substring(0, 2)
          );
          return date > minDate;
        }
        return;
      })
    );
  };

  let handleChangeDimensions = (dimensions) => {
    setSelectedDimensions(dimensions);
  };

  let handleChangeMetrics = (metrics) => {
    setSelectedMetrics(metrics);
  };

  //for selecting dimensions to move to the draggable list
  let handleSelectItem = (dim) => {
    if (!Object.keys(selectedDimensions[0]).includes(dim.id)) {
      let newDimensions = selectedDimensions[0].push(dim);
      setSelectedDimensions(newDimensions);
    }
  };

  //for selecting metrics to move to the draggable list
  let handleSelectMetrics = (metric) => {
    /*
      let newMetrics = [];
      selectedMetrics[0].forEach((metric) => {
        if (!Object.keys(metric).includes(metric.id)){
         selectedMetrics[0].push(metric);
        }
      });
    }
      setSelectedMetrics(newMetrics);
      */
  };

  let handleFilterData = (data) => {
    setFilteredData(data);
  };

  return (
    <div className="App">
      <DataTableSettings
        numRows={data.length}
        filterDataByDays={filterDataByDays}
        handleChangeDimensions={handleChangeDimensions}
        selectedDimensions={selectedDimensions}
        handleSelectItem={handleSelectItem}
        handleChangeMetrics={handleChangeMetrics}
        selectedMetrics={selectedMetrics}
        handleSelectMetrics={handleSelectMetrics}
        data={filteredData}
      />
      <div id="data-table-container">
        <DataTable
          data={data}
          selectedDimensions={selectedDimensions}
          selectedMetrics={selectedMetrics}
          handleFilterData={handleFilterData}
        />
      </div>
    </div>
  );
}
