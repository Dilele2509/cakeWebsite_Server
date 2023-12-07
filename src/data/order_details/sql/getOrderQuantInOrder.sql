SELECT [product_id], [quantity] as orderQuant
FROM [dbo].[order_details]
WHERE [order_id] = @order_id