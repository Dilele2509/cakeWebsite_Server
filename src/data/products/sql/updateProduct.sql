UPDATE [dbo].[products]
SET [category_id]=@category_id,
    [title]=@title,
    [price]=@price,
    [size]=@size,
    [size_price]=@size_price,
    [ingredients]=@ingredients,
    [discount_price]=@discount_price,
    [thumbnail]=@thumbnail,
    [description]=@description,
    [quantity]=@quantity,
    [total]=@total,
    [deleted]=@deleted
WHERE [id]=@id;

SELECT * FROM [dbo].[products]
WHERE [id]=@id