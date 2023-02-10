import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>What i ate in | A guide to eating in local restaurants around the globe</title>
        <meta
          name="description"
          content="What to eat in cities around the world. I review restaurants that locals would go to so you can get the most authentic food experience, wherever you are in the world."
        />
        <meta property="og:title" content="What i ate in | A guide to eating iun local restaurants around the globe" />
        <meta
          property="og:description"
          content="What to eat in cities around the world. I review restaurants that locals would go to so you can get the most authentic food experience, wherever you are in the world."
        />
        <meta property="og:image" content="https://www.example.com/food-blog-og-image.jpg" />
        <meta property="og:url" content="https://www.example.com/food-blog" />
        {/* <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Delicious Recipes | My Food Blog" />
        <meta
          name="twitter:description"
          content="Discover amazing recipes and cooking tips on My Food Blog. From classic dishes to new and exciting flavor combinations, we have something for everyone."
        />
        <meta name="twitter:image" content="https://www.example.com/food-blog-twitter-image.jpg" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet" />
      </Head>
    </>
  );
};

export default Header;
