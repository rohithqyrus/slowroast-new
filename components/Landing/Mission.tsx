const Mission = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-6 md:px-20 gap-10 text-darkgreen">
      <div>
        <h4 className="text-3xl md:text-4xl font-semibold">
          It&lsquo;s about bringing out the best in ourselves, pursuing dreams,
          achieving goals, and delicious coffee.
        </h4>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-poppins">
          We are a coffee company that aims to provide customers with
          high-quality, sustainably sourced coffee that is carefully roasted to
          perfection. We bring the joy and comfort
          of a great cup of coffee to people around the world while minimizing
          the environmental impact of the coffee industry. 
        </p>
        <p className="font-poppins">
        We work directly
          with farmers to ensure fair wages and environmentally responsible
          farming practices, and we roast our beans in small batches to
          maintain consistency and quality. We are committed to creating a
          positive impact on both the people who grow our coffee and the
          planet as a whole, and we strive to make each cup of our coffee a
          truly exceptional experience.
        </p>
        <small className="text-right">Nick Andrews</small>
      </div>
    </div>
  );
};

export default Mission;
