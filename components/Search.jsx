import axios from "axios";

const Search = () => {
  return (
    <form action="">
      <input type="text" />
      <button>Search</button>
    </form>
  );
};

export async function getStaticProps(context) {
  const id = context.params.slug;

  const reviewsRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/reviews`);

  return {
    props: { review: reviewsRes.data.data },
  };
}

export default Search;
