<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128583875/17.1.8%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/E4817)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

<!-- default file list end -->
# ODataContext - How to filter data by a foreign key value


<p>Sometimes it is required to filter some entities by a foreign key value.</p>
<p>This example demonstrates how to select all products that are associated with a required category. The Product entity has the Category navigation property. To filter products by the category ID, we need to expand the Category property using the ODataStore.expand option. In this case, we will be able to access a key field of a navigation property. This example operates with the <a href="http://services.odata.org/Northwind/Northwind.svc/"><u>Northwind</u></a> online OData service. We can determine that Category is a navigation property of the Product one by typing the following URL in our browser "<a href="http://services.odata.org/Northwind/Northwind.svc/$metadata">http://services.odata.org/Northwind/Northwind.svc/$metadata</a>". See a screenshot below.</p>
<p><br> <img src="https://raw.githubusercontent.com/DevExpress-Examples/odatacontext-how-to-filter-data-by-a-foreign-key-value-e4817/17.1.8+/media/963ac3bc-f886-430e-b460-9321ef0b85d8.png"></p>
<p> </p>
<p>In this case our code should be as follows:</p>


```js
TestExpand.db = new DevExpress.data.ODataContext({
        url: "<a href="http://services.odata.org/Northwind/Northwind.svc">http://services.odata.org/Northwind/Northwind.svc</a>",
        errorHandler: function (error) {
            alert(error.message);
        },
        entities: {
             Products: { key: "ProductID" }
        }
});

var viewModel = {
       dataSource: new DevExpress.data.DataSource({
            store: TestExpand.db.Products,
            select: ['ProductID', 'ProductName', 'Category.CategoryID', 'Category.CategoryName'],
            expand: ['Category'],
            filter: ['Category.CategoryID', '=', 5]
       })
};
```


<p> </p>

<br/>


