export default (req, res) => {
    console.log('req:', req.query)
    res.status(200).json({ text:'Hello' })
}