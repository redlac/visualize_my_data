import React from "react";

export default function ItemsList(props) {
  let handleSelectItem = (item) => {
    props.handleSelectItem(item);
  };

  let handleSelectMetrics = (item) => {
    props.handleSelectMetrics(item);
  };

  let dimensions = [
    { id: "1", content: "mediaType" },
    { id: "2", content: "trafficSource" },
    { id: "3", content: "geo" },
  ];

  let metrics = [
    { id: "4", content: "cost" },
    { id: "5", content: "impressions" },
    { id: "6", content: "clicks" },
    { id: "7", content: "conversions" },
  ];

  if (props.itemType === "dimensions") {
    return dimensions.map((item, index) => (
      <div key={index}>
        <button className="item" onClick={() => handleSelectItem(item)}>
          {item.content}
        </button>
      </div>
    ));
  } else {
    return metrics.map((item, index) => (
      <div key={index}>
        <button className="item" onClick={() => handleSelectMetrics(item)}>
          {item.content}
        </button>
      </div>
    ));
  }
}
