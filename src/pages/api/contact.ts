export default function handler(req, res) {
  if (req.method === 'POST') {
    //save to db!
    console.log(req.body, process.env.EMAIL_USER)
    res.json({message: 'ok'})
  }
}