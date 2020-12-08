TestExpand.home = function (params) {
    "use strict";

    var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            store: TestExpand.db.Products,
            select: ['ProductID', 'ProductName', 'Category.CategoryID', 'Category.CategoryName'],
            expand: ['Category'],
            filter: ['Category.CategoryID', '=', 5]
        })
    };

    return viewModel;
};