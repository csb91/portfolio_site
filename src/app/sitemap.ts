export default async function sitemap() {
  const routes = ['', '/about', '/experience', '/projects', '/contact'].map(
    (route) => ({
      url: `https://carterbrooks.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}