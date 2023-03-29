const Awards = () => {
  return (
    <div className="mx-6 md:mx-20 bg-secondary rounded-lg text-darkgreen px-10 grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 ">
      <div>
        <h2 className="text-2xl lg:text-3xl font-normal">Awards & Achievements</h2>
      </div>
      <div>
        <ul className="list-disc flex flex-col gap-3 font-poppins">
          <li>2 time Good Food Awards Winner</li>
          <li>2nd place, America&apos;s Best Cold Brew, Coffee Fest Baltimore</li>
          <li>Annual Top 30 Coffees on Coffee Review, 2015-2018, 2020-21</li>
        </ul>
      </div>
      <div>
        <ul className="list-disc flex flex-col gap-3 font-poppins">
          <li>50+ coffees scoring 90+ on Coffee Review</li>
          <li>1st Place Brewers Cup, TN US Coffee Champs Qualifiers, 2015</li>
          <li>Golden Bean Silver & Bronze Medals 2016</li>
          <li>Ninth place US Brewer&apos;s Cup Championship, Seattle</li>
          <li>1st Place, America&apos;s Best Espresso, Coffee Fest NYC</li>
        </ul>
      </div>
    </div>
  );
};

export default Awards;
