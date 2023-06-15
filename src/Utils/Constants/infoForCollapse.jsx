import { SafetyOutlined, ThunderboltOutlined, CheckOutlined } from "@ant-design/icons";

export const accordion = [
  {
    id: "fast",
    header: "Fast",
    text: "Since our website has a huge distribution in Armenia, with the help of our website you can sell your cars much faster.And as for the transportation of cars from America, we do it as soon as possible, a maximum of 4 months.",
    icon: (
      <div>
        <ThunderboltOutlined />
      </div>
    ),
  },
  {
    id: "safely",
    header: "Safely",
    text: "Our service guarantees that when transporting your car, you will receive it safe and sound, as it was in America.Payment is made in our office after the car passes all inspections.",
    icon: (
      <div>
        <SafetyOutlined />
      </div>
    ),
  },
  {
    id: "available",
    header: "Available",
    text: "Our service works directly with America. We have both our own office and good specialists in this field who know the nuances of their work. Thanks to this, the prices at which we offer you cars are much cheaper than those of many suppliers.",
    icon: (
      <div>
        <CheckOutlined />
      </div>
    ),
  },
];
