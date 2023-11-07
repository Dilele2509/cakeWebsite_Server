SELECT od.[id], od.[user_id], od.[order_id], od.[product_id], p.[title], od.[product_size], od.[price], od.[quantity], od.[total], p.[thumbnail]
FROM [dbo].[order_details] AS od
INNER JOIN [dbo].[products] AS p ON od.[product_id] = p.[id]