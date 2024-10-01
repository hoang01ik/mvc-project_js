
exports.getHomePage = (req, res) => {
    res.render('layout', { message: req.flash('success'), body: 'index' });
};
