import Prismic from "prismic-javascript";

const PRISMIC_URL = `https://${process.env.PRISMIC_REPOSITORY_NAME}.prismic.io`;

export const PrismicClient = Prismic.client(`${PRISMIC_URL}/api/v2`, {
  accessToken: process.env.PRISMIC_API_TOKEN,
});

const GRAPHQL_API_URL = `${PRISMIC_URL}/graphql`;

export async function fetchAPI<T = any>(query, variables): Promise<T> {
  const prismicAPI = await PrismicClient.getApi();

  const response = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.PRISMIC_API_TOKEN}`,
      },
    }
  );

  const { data } = await response.json();

  return data;
}
