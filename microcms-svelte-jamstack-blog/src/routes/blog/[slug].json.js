import fetch from 'isomorphic-unfetch';

export async function get(req, res) {
  const { slug } = req.params;
  fetch(`https://your-service-id.microcms.io/api/v1/blog/${slug}`, {
    headers: { "X-API-KEY" : process.env.API_KEY }
  })
    .then(res => res.json())
    .then(json => {
      res.writeHead(200, {
          'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(json))
    });
}
