export default async (req, res) => {
  const userReposResponse = await fetch(
    `https://api.github.com/repos/venturh/yee`
  );

  const repo = await userReposResponse.json();

  return res.status(200).json({
    repo,
  });
};
