const profiles = [{ username: 'bensaebe', password: '123321' }];
export default function handler(req, res) {
  res.status(200).json(profiles);
}
