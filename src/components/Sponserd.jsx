import React from "react";

const Sponserd = () => {
  const sponsers = [
    {
      title: "Big Screen",
      subtitle: "Smart watch series 7",
      desc: "From $399 or $62/mo",
      img: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-01.jpg?v=1655701528",
    },
    {
      title: "Studio Display",
      subtitle: "600 nits of bridhtness",
      desc: "27-inch 5k. Retina display",
      img: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-02.jpg?v=1655701528",
    },
    {
      title: "Smartphones",
      subtitle: "Apple 13 PRO",
      desc: "Now in green. From $999.00 or $41.62/mo.for 24/mo",
      img: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-03.jpg?v=1655701528",
    },
    {
      title: "Home speakers",
      subtitle: "Room filling sound",
      desc: "From $699 or $116/mo.for 12mo",
      img: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-04.jpg?v=1655701528",
    },
  ];

  const SponserCard = (props) => {
    const { title, subtitle, desc, img } = props.item;
    return (
      <div
        className="bg-center bg-[length:100%_100%] rounded-md  sm:px-6 px-2 pt-8 h-[26rem] flex flex-col gap-1 bg-no-repeat text-black sp-card hover:bg-[length:110%_110%] transition-all duration-200 ease-linear"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h3 className="uppercase text-text-secondary">{title}</h3>
        <h1 className="text-2xl">{subtitle}</h1>
        <p className="text-text-secondary">{desc}</p>
      </div>
    );
  };

  return (
    <section className="grid place-items-center pt-16 px-4 bg-bg-dull">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 max-w-[1450px] w-full sp-card ">
        {sponsers.map((item, i) => {
          return <SponserCard item={item} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Sponserd;