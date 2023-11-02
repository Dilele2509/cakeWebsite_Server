UPDATE [dbo].[order_details]
SET [order_id]=@order_id,
    [product_id]=@product_id,
    [price]=@price,
    [quantity]=@quantity,
    [total]=@total
WHERE [id]=@id

SELECT * FROM [dbo].[order_details]
WHERE [id]=@id