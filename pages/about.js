const about = () => {
  return (
    <div className="absolute top-28 flex flex-col md:flex-row md:flex-wrap md:w-3/4 md:top-0 md:left-1/4 md:h-full">
      <h1 className="text-3xl">About</h1>
      <div>
        <h2 className="text-2xl">About Me</h2>
        <p>
          My hobbies include cooking, traveling and eating... I made this site as a place to organize all of
          the places I&apos;ve vistied and the restaurants I ate at during those travels. When looking for a
          restaurant, I imagine where the locals are eating on a regular weekday dinner, as I think tht will
          give you the best value/expereince. If you love value as much as I do, I think this list will be
          helpful so YOU don&apos;t have to be the one scrolling around google maps in desparation to find a
          good spot to eat and annoy your S/O in the process.
        </p>
      </div>

      <div>
        <h2 className="text-2xl">rating system</h2>
        <ul>
          <li>
            The color: Green means go, red means don&apos;t, let&apos;s keep it simple. The site should mostly
            be green since I do the prevetting before I go to these places.
          </li>
          <li>Taste: What i thought about how the food tasted. </li>
          <li>Price: not the absolute price of the food but what I thought aout the value relatively</li>
          <li>
            People: Since most of these restaurants are in foreign countries and out of the tourist traps,
            language barrier can be an issue for some. This rating is not just how well they understand
            english but how much they try to communicate with you without getting frustrated.
          </li>
          <li>
            Bathroom: Quoting the great Anthony Bourdain &lsquo;I won&apos;t eat in a restaurant with filthy
            bathrooms. This isn&apos;t a hard call. They let you see the bathrooms. If the restaurant
            can&apos;t be bothered to replace the puck in the urinal or keep the toilets and floors clean,
            then just imagine what their refrigeration and work spaces look like.&rsquo; Tip toeing around -
            its a bathroom - Where di you get this decor?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default about;
