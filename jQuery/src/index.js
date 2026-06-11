$(() => {
  const oDataContext = new DevExpress.data.ODataContext({
    url: 'https://services.odata.org/Northwind/Northwind.svc',
    errorHandler(error) {
      DevExpress.ui.notify(error.message, 'error', 3000);
    },
    version: 3,
    entities: {
      Products: { key: 'ProductID' },
    },
  });
  $('#data-grid').dxDataGrid({
    columns: ['ProductID', 'ProductName', 'Category.CategoryID', 'Category.CategoryName'],
    dataSource: new DevExpress.data.DataSource({
      store: oDataContext.Products,
      select: ['ProductID', 'ProductName', 'Category.CategoryID', 'Category.CategoryName'],
      expand: ['Category'],
      filter: ['Category.CategoryID', '=', 5],
    }),
  });
});
