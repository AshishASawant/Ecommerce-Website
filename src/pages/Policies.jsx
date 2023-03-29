import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Policies = ({ title }) => {
  const policyData = [
    {
      title: "The Standard Lorem Ipsum Passage",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed massa in vulputate. Quisque gravida suscipit tincidunt.",
    },
    {
      title: "At Vero Eos Et Accusamus Et Iusto Odio Dignissimos",
      desc: "Mauris elementum scelerisque elit non egestas. Cras lacus nibh, pretium quis bibendum nec, dapibus a metus. Morbi eros lectus, aliquam eu aliquam id, fringilla nec eros. Praesent suscipit commodo diam, non viverra turpis dapibus malesuada. Duis cursus metus eu sem eleifend, id rhoncus odio porttitor.",
    },
    {
      title: "Certain Circumstances And Owing To The Claims Of Duty Or The Obligations",
      desc: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes.",
    },
    {
      title: "Integer Ultrices Laoreet Nunc In Gravida",
      desc: "Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris suscipit dolor scelerisque, bibendum tellus ac, pharetra sapien. Praesent lacinia scelerisque odio et consequat. In a facilisis lacus. Maecenas vel lobortis tellus.",
    },
  ];

  const PolicyCard = ({item}) => {

    let {title,desc}=item
    return (
      <div className="grid gap-4 py-2 w-full">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>
        <p className="text-text-secondary">
          {desc}
        </p>
      </div>
    );
  };

  return (
    <section className="grid place-items-center w-full">
      <Breadcrumb title={title} />
      <div className="max-w-[1450px] px-4 w-full">
        <div className=" grid gap-5 bg-bg-secondary  p-10 px-6  shadow-md mt-10 rounded-md">
        {policyData.map((item,i)=><PolicyCard item={item} key={i}/>)}
        </div>
      </div>
    </section>
  );
};

export default Policies;
