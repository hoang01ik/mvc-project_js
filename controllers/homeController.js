const pages = {
    home: {
        title: 'Trang chủ',
        id: 'index'
    },
    product: {
        title: 'Sản phẩm',
        id: 'product'
    }
};

exports.getHomePage = (req, res) => {
    res.render('layout', { 
        message: req.flash('success'), 
        body: pages.home
    });
};

exports.getProductPage = (req, res) => {
    res.render('layout', { 
        message: req.flash('success'), 
        body: 'product'
    });
};
